import React from 'react'

import { Label } from '@components/Label'
import { BASE_URL } from '@constants/api'
import { useAppSelector } from '@store/hooks'

import { Temperature, TextContainer, WeatherImg, Wrapper } from './styled'

export const TodayWeatherCard = () => {
  const { openWeatherData } = useAppSelector((state) => state.weatherReducer)
  const temperature = Math.round(openWeatherData?.current.temp as number) || ''
  const iconName = openWeatherData?.current.weather.icon

  return (
    <Wrapper>
      <WeatherImg src={`${BASE_URL.OPENWEATHERMAP_IMG}/${iconName}@2x.png`} alt="weater-icon" />
      <TextContainer>
        <Label text="Today" />
        <Temperature>
          {temperature}
          &deg;
        </Temperature>
      </TextContainer>
    </Wrapper>
  )
}
