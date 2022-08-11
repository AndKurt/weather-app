import React from 'react'
import { WeekDaysContainer, Wrapper } from './styled'
import { useAppSelector } from '@store/hooks'
import { TodayWeatherCard } from '@components/TodayWeatherCard'
import { NextWeatherCard } from '@components/NextWeatherCard'
import { Loader } from '@components/Loader'

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
