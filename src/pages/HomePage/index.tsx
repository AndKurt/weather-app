import React, { useEffect } from 'react'
import { Header } from '@components/Header'
import { Content, Wrapper } from './styled'
import { WeatherContainer } from '@components/WeatherContainer'
import { fetchLocationByIP } from '@store/actions/locationAction'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { Loader } from '@components/Loader'
import { fetchWeatherOpenweathermap, fetchWeatherStormglass } from '@store/actions/weatherAction'

export function HomePage() {
  const dispatch = useAppDispatch()
  const { isLoading, locationData } = useAppSelector((state) => state.locationReducer)

  console.log(dispatch(fetchWeatherStormglass()))
  console.log(dispatch(fetchWeatherOpenweathermap()))

  useEffect(() => {
    if (!locationData?.city) {
      dispatch(fetchLocationByIP())
    }
  }, [])

  return (
    <Wrapper>
      {isLoading && <Loader />}
      <Content>
        <Header />
        <WeatherContainer />
      </Content>
    </Wrapper>
  )
}
