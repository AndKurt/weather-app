import ApiCalendar from 'react-google-calendar-api'

import axios from 'axios'
import { gapi } from 'gapi-script'

import { BASE_URL, GOOGLE_CLIENT_ID } from '@constants/api'
import { IGoogleCalendarResponce } from '@interfaces/calendar'
import { getFormatedToISODate } from '@utils/timeDate'

// ----- Google init --------
export const googleInit = () => {
  const initClient = () => {
    gapi.auth2.init({
      client_id: GOOGLE_CLIENT_ID,
      scope: BASE_URL.GOOGLE_URL_SCOPE,
    })
  }
  gapi.load('client:auth2', initClient)
}

// ----- Google Calendar -------
export const fetchCalendar = async (accessToken: string): Promise<IGoogleCalendarResponce | Error> => {
  try {
    const today = getFormatedToISODate()
    const tomorrow = getFormatedToISODate(new Date(), 1)

    const { data } = await axios.get(`${BASE_URL.GOOGlE_URL_CALENDAR}?timeMin=${today}&timeMax=${tomorrow}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    return data
  } catch (error) {
    return new Error('Ooops... Something went wrong')
  }
}
