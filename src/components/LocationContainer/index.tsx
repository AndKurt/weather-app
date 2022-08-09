import React, { ChangeEvent, useState } from 'react'
import { City, Country, InputCity, Wrapper } from './styled'
import useOnclickOutside from 'react-cool-onclickoutside'

export const LocationContainer = () => {
  const [isEditCity, setIsEditCity] = useState<boolean>(false)
  const [cityName, setCityName] = useState<string>('Minsk')

  const handleOpenEdit = () => {
    setIsEditCity(true)
  }

  const handleCloseEdit = useOnclickOutside(() => {
    setIsEditCity(false)
  })

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
        <InputCity defaultValue={cityName} ref={handleCloseEdit} onChange={handleRenameCity} autoFocus />
      )}
      <Country>Belarus</Country>
    </Wrapper>
  )
}
