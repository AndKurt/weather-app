import axios from 'axios'

import { API_KEY, BASE_URL, GEO_BY_IP_URL } from '@constants/api'
import { ILocationCityNameResponce, ILocationIPResponce } from '@interfaces/locationAPI'

export const fetchLocationByIP = async (): Promise<ILocationIPResponce | Error> => {
  try {
    const { data } = await axios.get(GEO_BY_IP_URL)
    return data
  } catch (error) {
    throw Error('Nothing found')
  }
}

export const fetchLocationByCityName = async (cityName: string): Promise<ILocationCityNameResponce | Error> => {
  try {
    const { data } = await axios.get(
      `${BASE_URL.POSITIONSTACK}/forward?access_key=${API_KEY.POSITIONSTACK}&query=${cityName}`,
    )
    return data
  } catch (error) {
    throw Error('Nothing found')
  }
}
