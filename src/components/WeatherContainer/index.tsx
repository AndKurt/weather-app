import React from 'react'

import { Loader } from '@components/Loader'
import { NextWeatherCard } from '@components/NextWeatherCard'
import { TodayWeatherCard } from '@components/TodayWeatherCard'
import { useAppSelector } from '@store/hooks'

import { WeekDaysContainer, Wrapper } from './styled'

export const WeatherContainer = () => {
  const { isLoading, openWeatherData } = useAppSelector((state) => state.weatherReducer)
  const weekDays = openWeatherData?.daily

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
