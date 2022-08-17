import ApiCalendar from 'react-google-calendar-api'

import { API_KEY, BASE_URL, GOOGLE_CLIENT_ID } from '@constants/api'

export const config = {
  clientId: GOOGLE_CLIENT_ID,
  apiKey: API_KEY.GOOGLE,
  scope: BASE_URL.GOOGLE_URL_SCOPE,
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
}

export const apiCalendar = new ApiCalendar(config)
