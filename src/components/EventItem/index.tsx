import React from 'react'

import { ICalendarItem } from '@interfaces/calendar'

import { Wrapper } from './styled'

export const EventItem = ({ end, start, summary }: ICalendarItem) => (
  <Wrapper>
    <h3>{`${start.time}${start.format} - ${end.time}${end.format}`}</h3>
    <h4>{summary}</h4>
  </Wrapper>
)
