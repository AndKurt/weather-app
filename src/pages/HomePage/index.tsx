import React, { useEffect } from 'react'

import { ApiSelector } from '@components/ApiSelector'
import { EventsContainer } from '@components/EventsContainer'
import { GoogleControls } from '@components/GoogleControls'
import { Header } from '@components/Header'
import { Loader } from '@components/Loader'
import { WeatherContainer } from '@components/WeatherContainer'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { getLocationByIPPending } from '@store/reducers/locationReducer'

import { CentralContainer, CentralHelper, Content, Wrapper } from './styled'

export const HomePage = () => {
  const dispatch = useAppDispatch()
  const { isLoading, locationData } = useAppSelector((state) => state.locationReducer)
  const { currentBackground } = useAppSelector((state) => state.generalReducer)

  useEffect(() => {
    if (!locationData?.city) {
      dispatch(getLocationByIPPending())
    }
  }, [])

  return (
    <Wrapper currentBackground={currentBackground}>
      {isLoading && <Loader />}
      <Content currentBackground={currentBackground}>
        <Header />
        <CentralContainer>
          <CentralHelper>
            <GoogleControls />
            <ApiSelector />
          </CentralHelper>
          <EventsContainer />
        </CentralContainer>
        <WeatherContainer />
      </Content>
    </Wrapper>
  )
}
