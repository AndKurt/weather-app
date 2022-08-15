import React from 'react'

import { DateContainer } from '@components/DateContainer'
import { LocationContainer } from '@components/LocationContainer'

import { Wrapper } from './styled'

export const Header = () => (
  <Wrapper>
    <DateContainer />
    <LocationContainer />
  </Wrapper>
)
