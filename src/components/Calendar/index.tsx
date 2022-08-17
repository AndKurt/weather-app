/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { SyntheticEvent, useState } from 'react'

import { apiCalendar } from '@api/calendarApi'
import { IGoogleCalendarResponce } from '@interfaces/calendar'

export const Calendar = () => {
  const [events, setEvents] = useState<IGoogleCalendarResponce[]>([])
  const handleItemClick = (event: SyntheticEvent<any>, name: string): void => {
    if (name === 'sign-in') {
      apiCalendar.handleAuthClick()
    } else if (name === 'sign-out') {
      apiCalendar.handleSignoutClick()
    }
  }

  return (
    <div>
      <div style={{ padding: '0.5em' }}>
        <button type="button" onClick={(e) => handleItemClick(e, 'sign-in')}>
          sign-in
        </button>
        <button type="button" onClick={(e) => handleItemClick(e, 'sign-out')}>
          sign-out
        </button>
      </div>
      <div style={{ padding: '0.5em' }}>
        <button
          type="button"
          onClick={() => {
            const eventFromNow: object = {
              summary: 'Poc Dev From Now',
              time: 480,
            }

            apiCalendar
              .createEventFromNow(eventFromNow)
              .then((result: object) => {
                console.log(result)
              })
              .catch((error: any) => {
                console.log(error)
              })
          }}
        >
          Create Event from now
        </button>
      </div>
      <div style={{ padding: '0.5em' }}>
        <button
          type="button"
          onClick={() => {
            apiCalendar.listUpcomingEvents(10).then(({ result }: any) => {
              setEvents(result.items)
            })
          }}
        >
          List upcoming events
        </button>
        <div>
          <h4>Events</h4>
          {events.length === 0 && <p>No events to show</p>}
          {events.map((event) => (
            <p key={event.id}>{JSON.stringify(event)}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
