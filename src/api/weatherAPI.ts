import axios from 'axios'

import { API_KEY, BASE_URL } from '@constants/api'
import { DAYS_AMOUNT } from '@constants/common'
import { IOpenweatherResponse } from '@interfaces/openWeather'
import { getNextWeekdayDate } from '@utils/timeDate'

export const fetchOpenweather = async (latitude: string, longitude: string): Promise<IOpenweatherResponse | Error> => {
  try {
    const { data } = await axios.get(
      `${BASE_URL.OPENWEATHERMAP}/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&appid=${API_KEY.OPENWEATHERMAP}&units=metric`,
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
      `${BASE_URL.STORMGLASS}?lat=${latitude}&lng=${longitude}&end=${nextDay}&params=airTemperature&source=sg`,
      { headers: { Authorization: API_KEY.STORMGLASS } },
    )
    return data
  } catch (error) {
    return new Error('Ooops... Try to use another API service')
  }
}
