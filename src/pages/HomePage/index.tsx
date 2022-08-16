import React, { useEffect } from 'react'

import { ApiSelector } from '@components/ApiSelector'
import { Header } from '@components/Header'
import { Loader } from '@components/Loader'
import { WeatherContainer } from '@components/WeatherContainer'
// import { BASE_WEATHER_DESCRIPTION } from '@constants/common'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { getLocationByIPPending } from '@store/reducers/locationReducer'

import { CentralContainer, Content, Wrapper } from './styled'

export const HomePage = () => {
  const dispatch = useAppDispatch()
  const { isLoading } = useAppSelector((state) => state.locationReducer)
  // const { openWeatherData } = useAppSelector((state) => state.weatherReducer)
  const { currentBackground } = useAppSelector((state) => state.generalReducer)
  // const weatherDescription = openWeatherData?.current.weather.description

  useEffect(() => {
    // if (!locationData?.city) {
    dispatch(getLocationByIPPending())
    // }
  }, [])

  // useEffect(() => {
  //  if (weatherDescription !== BASE_WEATHER_DESCRIPTION) {
  //    // dispatch(fetchBackgrounds(weatherDescription as string)).unwrap()
  //  }
  // }, [weatherDescription])

  return (
    <Wrapper currentBackground={currentBackground}>
      {isLoading && <Loader />}
      <Content currentBackground={currentBackground}>
        <Header />
        <CentralContainer>
          <ApiSelector />
        </CentralContainer>
        <WeatherContainer />
      </Content>
    </Wrapper>
  )
}
