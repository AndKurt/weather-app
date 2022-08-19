import axios from 'axios'

import { API_KEY, BASE_URL, GEO_BY_IP_URL } from '@constants/api'
import { ILocationCityNameResponce, ILocationIPResponce } from '@interfaces/locationAPI'

export const fetchLocationByIP = async (): Promise<ILocationIPResponce | Error> => {
  try {
    const response = await fetch(GEO_BY_IP_URL).then((data) => data.json())
    return response
  } catch (error) {
    throw Error('Nothing found')
  }
}

export const fetchLocationByCityName = async (cityName: string): Promise<ILocationCityNameResponce | Error> => {
  try {
    const { data } = await axios.get<ILocationCityNameResponce>(
      `${BASE_URL.POSITIONSTACK}/forward?access_key=${API_KEY.POSITIONSTACK}&query=${cityName}`,
    )

    if (!data.data.length) {
      return new Error('Nothing found')
    }

    return data
  } catch (error) {
    return new Error('Something went wrong. Try again')
  }
}
