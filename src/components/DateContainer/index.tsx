import React from 'react'
import { Date, Format, Time, TimeBlock, Wrapper } from './styled'

export const DateContainer = () => {
  return (
    <Wrapper>
      <TimeBlock>
        <Time>12:30</Time>
        <Format>pm</Format>
      </TimeBlock>
      <Date>monday, 2 february 2015</Date>
    </Wrapper>
  )
}
