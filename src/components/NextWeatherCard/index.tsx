import React from 'react'
import { Label } from '@components/Label'
import { BASE_URL } from '@constants/api'
import { Temperature, WeatherImg, Wrapper } from './styled'

interface INextWeatherCard {
  iconName: string
  dayName: string
  temperature: number
}

export const NextWeatherCard = ({ iconName, dayName, temperature }: INextWeatherCard) => {
  return (
    <Wrapper>
      <Label text={dayName} />
      <WeatherImg src={`${BASE_URL.OPENWEATHERMAP_IMG}/${iconName}@2x.png`} alt="weater-icon" />
      <Temperature>{temperature}&deg;</Temperature>
    </Wrapper>
  )
}
