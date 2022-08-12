import React, { useEffect } from 'react'
import { CentralContainer, Content, Wrapper } from './styled'
import { Header } from '@components/Header'
import { fetchLocationByIP } from '@store/actions/locationAction'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { Loader } from '@components/Loader'
import { fetchWeatherOpenweathermap, fetchWeatherStormglass } from '@store/actions/weatherAction'
import { WeatherContainer } from '@components/WeatherContainer'
import { ApiSelector } from '@components/ApiSelector'
import { MOCK_STORMGLASS_DATA } from '@mock/stormglassData'
import { addDataToStormglassData, sortStormglassData } from '@utils/weatherHelpers'
import { IWeatherStoreData } from '@interfaces/weatherStore'
import { fetchBackgrounds } from '@store/actions/generalAction'
import { BASE_WEATHER_DESCRIPTION } from '@constants/common'

export function HomePage() {
  const dispatch = useAppDispatch()
  const { isLoading, locationData } = useAppSelector((state) => state.locationReducer)
  const { openWeatherData } = useAppSelector((state) => state.weatherReducer)
  const { currentBackground } = useAppSelector((state) => state.generalReducer)
  const weatherDescription = openWeatherData?.current.weather.description

  //console.log(dispatch(fetchWeatherStormglass()))
  //console.log(dispatch(fetchWeatherOpenweathermap()))
  //console.log(sortStormglassData(MOCK_STORMGLASS_DATA))

  useEffect(() => {
    if (!locationData?.city) {
      dispatch(fetchLocationByIP()).unwrap()
    }
    dispatch(fetchWeatherOpenweathermap()).unwrap()
  }, [])

  useEffect(() => {
    if (weatherDescription !== BASE_WEATHER_DESCRIPTION) {
      dispatch(fetchBackgrounds(weatherDescription as string)).unwrap()
    }
  }, [weatherDescription])

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
