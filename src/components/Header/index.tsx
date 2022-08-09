import { DateContainer } from '@components/DateContainer'
import { LocationContainer } from '@components/LocationContainer'
import React from 'react'
import { Wrapper } from './styled'

export const Header = () => {
  return (
    <Wrapper>
      <DateContainer />
      <LocationContainer />
    </Wrapper>
  )
}
