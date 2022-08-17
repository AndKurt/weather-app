import ApiCalendar from 'react-google-calendar-api'

import axios from 'axios'

import { API_KEY, BASE_URL, GOOGLE_CLIENT_ID } from '@constants/api'
import { IGoogleCalendarResponce } from '@interfaces/calendar'
import { getFormatedToISODate } from '@utils/timeDate'

export const config = {
  clientId: GOOGLE_CLIENT_ID,
  apiKey: API_KEY.GOOGLE,
  scope: BASE_URL.GOOGLE_URL_SCOPE,
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
}

export const apiCalendar = new ApiCalendar(config)

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
