import React from 'react'

import { Label } from '@components/Label'
import { BASE_URL } from '@constants/api'
import { API_NAME } from '@constants/common'
import { useAppSelector } from '@store/hooks'

import { Temperature, TextContainer, WeatherImg, Wrapper } from './styled'

export const TodayWeatherCard = () => {
  const { openWeatherData, stormglassData, stormglassError } = useAppSelector((state) => state.weatherReducer)
  const { currentApi } = useAppSelector((state) => state.generalReducer)

  const isOpenweatherApi = currentApi.value === API_NAME.OPENWEATHER
  const temperature = Math.round(
    isOpenweatherApi || stormglassError
      ? (openWeatherData?.current.temp as number)
      : (stormglassData?.current.temp as number),
  )

  const iconName =
    isOpenweatherApi || stormglassError ? openWeatherData?.current.weather.icon : stormglassData?.current.weather.icon

  if (temperature && iconName) return null

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
