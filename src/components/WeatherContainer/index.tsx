import React from 'react'

import { Loader } from '@components/Loader'
import { NextWeatherCard } from '@components/NextWeatherCard'
import { TodayWeatherCard } from '@components/TodayWeatherCard'
import { API_NAME } from '@constants/common'
import { useAppSelector } from '@store/hooks'

import { WeekDaysContainer, Wrapper } from './styled'

export const WeatherContainer = () => {
  const { isLoading, openWeatherData, stormglassData, stormglassError } = useAppSelector(
    (state) => state.weatherReducer,
  )
  const { currentApi } = useAppSelector((state) => state.generalReducer)

  const isOpenweatherApi = currentApi.value === API_NAME.OPENWEATHER
  const weekDays = isOpenweatherApi || stormglassError ? openWeatherData?.daily : stormglassData?.daily

  return (
    <Wrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <TodayWeatherCard />
          <WeekDaysContainer>
            {weekDays?.map(({ temp, weather, weekDay }) => (
              <NextWeatherCard key={weekDay} iconName={weather.icon} dayName={weekDay} temperature={temp} />
            ))}
          </WeekDaysContainer>
        </>
      )}
    </Wrapper>
  )
}
