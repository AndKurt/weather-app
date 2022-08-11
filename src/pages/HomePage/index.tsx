import React, { useEffect } from 'react'
import { Content, Wrapper } from './styled'
import { Header } from '@components/Header'
import { fetchLocationByIP } from '@store/actions/locationAction'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { Loader } from '@components/Loader'
import { fetchWeatherOpenweathermap } from '@store/actions/weatherAction'
import { WeatherContainer } from '@components/WeatherContainer'

export function HomePage() {
  const dispatch = useAppDispatch()
  const { isLoading, locationData } = useAppSelector((state) => state.locationReducer)

  //console.log(dispatch(fetchWeatherStormglass()))
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
