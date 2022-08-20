import ApiCalendar from 'react-google-calendar-api'

import axios from 'axios'
import { gapi } from 'gapi-script'

import { IGoogleCalendarResponce } from '@interfaces/calendar'
import { getFormatedToISODate } from '@utils/timeDate'

// ----- Google init --------
export const googleInit = () => {
  const initClient = () => {
    gapi.auth2.init({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID as string,
      scope: process.env.REACT_APP_API_BASE_URL_GOOGLE_URL_SCOPE as string,
    })
  }
  gapi.load('client:auth2', initClient)
}

// ----- Google Calendar -------
export const fetchCalendar = async (accessToken: string): Promise<IGoogleCalendarResponce | Error> => {
  try {
    const today = getFormatedToISODate()
    const tomorrow = getFormatedToISODate(new Date(), 1)

    const { data } = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL_GOOGLE_URL_CALENDAR as string}?timeMin=${today}&timeMax=${tomorrow}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    )
    return data
  } catch (error) {
    return new Error('Ooops... Something went wrong')
  }
}
