import React from 'react'
import { Header } from '@components/Header'
import { Content, Wrapper } from './styled'
import { WeatherContainer } from '@components/WeatherContainer'

export function HomePage() {
  return (
    <Wrapper>
      <Content>
        <Header />
        <WeatherContainer />
      </Content>
    </Wrapper>
  )
}
