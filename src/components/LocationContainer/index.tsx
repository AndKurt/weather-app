import React, { ChangeEvent, useEffect, useState, KeyboardEvent } from 'react'
import useOnclickOutside from 'react-cool-onclickoutside'

import { useAppDispatch, useAppSelector } from '@store/hooks'
import { getLocationByCityNamePending } from '@store/reducers/locationReducer'
import { resetWeaterStoreForUpdate } from '@store/reducers/weatherReducer'

import { City, Country, InputCity, Wrapper } from './styled'

export const LocationContainer = () => {
  const dispatch = useAppDispatch()
  const { locationData } = useAppSelector((state) => state.locationReducer)

  const [isEditCity, setIsEditCity] = useState<boolean>(false)
  const [cityName, setCityName] = useState<string>(locationData?.city as string)

  useEffect(() => {
    setCityName(locationData?.city as string)
  }, [locationData])

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
        <City onClick={handleOpenEdit}>{cityName}</City>
      ) : (
        <InputCity
          defaultValue={cityName}
          ref={handleCloseEdit}
          onChange={handleRenameCity}
          onKeyDown={handleCloseEditByBtn}
          autoFocus
        />
      )}
      <Country>{locationData?.country}</Country>
    </Wrapper>
  )
}
