/* eslint-disable consistent-return */
import React, { ChangeEvent, useEffect, useState, KeyboardEvent } from 'react'
import useOnclickOutside from 'react-cool-onclickoutside'

import { Delayed } from '@components/Delayed'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { getLocationByCityNamePending, resetLocationError } from '@store/reducers/locationReducer'
import { resetWeaterStoreForUpdate } from '@store/reducers/weatherReducer'

import { City, Country, ErrorMessage, InputCity, Wrapper } from './styled'

const DELAY_FOR_REMOVE_ERROR = 2000

export const LocationContainer = () => {
  const dispatch = useAppDispatch()
  const { locationData, errorMsg } = useAppSelector((state) => state.locationReducer)

  const [isEditCity, setIsEditCity] = useState<boolean>(false)
  const [cityName, setCityName] = useState<string>(locationData?.city as string)

  useEffect(() => {
    setCityName(locationData?.city as string)
  }, [locationData])

  useEffect(() => {
    if (errorMsg) {
      setTimeout(() => {
        dispatch(resetLocationError())
      }, DELAY_FOR_REMOVE_ERROR)
    }
  }, [dispatch, errorMsg])

  useEffect(() => {
    if (cityName !== locationData?.city && !isEditCity) {
      dispatch(resetWeaterStoreForUpdate())
      dispatch({ type: getLocationByCityNamePending.type, payload: cityName })
    }
  }, [isEditCity])

  const handleOpenEdit = () => {
    setIsEditCity(true)
  }

  const handleCloseEdit = useOnclickOutside(() => {
    setIsEditCity(false)
  })

  const handleCloseEditByBtn = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsEditCity(false)
    }
  }

  const handleRenameCity = (e: ChangeEvent<HTMLInputElement>) => {
    const newCityName = e.target.value.trim()
    if (newCityName) {
      setCityName(newCityName)
    }
  }

  return (
    <Wrapper>
      {!isEditCity ? (
        <City onClick={handleOpenEdit}>{locationData?.city}</City>
      ) : (
        <InputCity
          defaultValue={locationData?.city}
          ref={handleCloseEdit}
          onChange={handleRenameCity}
          onKeyDown={handleCloseEditByBtn}
          autoFocus
        />
      )}
      <Country>{locationData?.country}</Country>
      {errorMsg && (
        <Delayed delay={DELAY_FOR_REMOVE_ERROR}>
          <ErrorMessage>{errorMsg}</ErrorMessage>
        </Delayed>
      )}
    </Wrapper>
  )
}
