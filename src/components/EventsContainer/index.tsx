import React from 'react'

import { EventItem } from '@components/EventItem'
import { Loader } from '@components/Loader'
import { ICalendarItem } from '@interfaces/calendar'
import { useAppSelector } from '@store/hooks'

import { GreetText, Wrapper } from './styled'

export const EventsContainer = () => {
  const { isAuth, calendarData, userData, isLoading } = useAppSelector((state) => state.calendarReducer)

  if (!isAuth) return null

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <GreetText>Welcome {userData?.givenName}</GreetText>
      <Wrapper>
        {calendarData &&
          calendarData.items.map(({ end, start, summary }: ICalendarItem) => (
            <EventItem key={`${summary}${start}`} end={end} start={start} summary={summary} />
          ))}
      </Wrapper>
    </>
  )
}
