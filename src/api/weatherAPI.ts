import axios from 'axios'

import { DAYS_AMOUNT } from '@constants/common'
import { IOpenweatherResponse } from '@interfaces/openWeather'
import { getNextWeekdayDate } from '@utils/timeDate'

export const fetchOpenweather = async (latitude: string, longitude: string): Promise<IOpenweatherResponse | Error> => {
  try {
    const { data } = await axios.get(
      `${
        process.env.REACT_APP_API_BASE_URL_OPENWEATHERMAP as string
      }/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&appid=${
        process.env.REACT_APP_API_KEY_OPENWEATHERMAP as string
      }&units=metric`,
    )
    return data
  } catch (error) {
    return new Error('Ooops... Try to use another API service')
  }
}

export const fetchStormglass = async (latitude: string, longitude: string): Promise<IOpenweatherResponse | Error> => {
  try {
    const nextDay = getNextWeekdayDate(DAYS_AMOUNT)
    const { data } = await axios.get(
      `${
        process.env.REACT_APP_API_BASE_URL_STORMGLASS as string
      }?lat=${latitude}&lng=${longitude}&end=${nextDay}&params=airTemperature&source=sg`,
      { headers: { Authorization: process.env.REACT_APP_API_KEY_STORMGLASS as string } },
    )
    return data
  } catch (error) {
    return new Error('Ooops... Try to use another API service')
  }
}
