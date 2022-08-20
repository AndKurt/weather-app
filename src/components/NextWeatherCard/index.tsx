import React from 'react'

import { Label } from '@components/Label'

import { Temperature, WeatherImg, Wrapper } from './styled'

interface INextWeatherCard {
  iconName: string
  dayName: string
  temperature: number
}

export const NextWeatherCard = ({ iconName, dayName, temperature }: INextWeatherCard) => (
  <Wrapper>
    <Label text={dayName} />
    <WeatherImg
      src={`${process.env.REACT_APP_API_BASE_URL_OPENWEATHERMAP_IMG as string}/${iconName}@2x.png`}
      alt="weater-icon"
    />
    <Temperature>
      {temperature}
      &deg;
    </Temperature>
  </Wrapper>
)
