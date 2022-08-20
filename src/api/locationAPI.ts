import axios from 'axios'

import { ILocationCityNameResponce, ILocationIPResponce } from '@interfaces/locationAPI'

export const fetchLocationByIP = async (): Promise<ILocationIPResponce | Error> => {
  try {
    const response = await fetch(process.env.REACT_APP_GEO_BY_IP_URL as string).then((data) => data.json())
    return response
  } catch (error) {
    throw Error('Nothing found')
  }
}

export const fetchLocationByCityName = async (cityName: string): Promise<ILocationCityNameResponce | Error> => {
  try {
    const { data } = await axios.get<ILocationCityNameResponce>(
      `${process.env.REACT_APP_API_BASE_URL_POSITIONSTACK as string}/forward?access_key=${
        process.env.REACT_APP_API_KEY_POSITIONSTACK as string
      }&query=${cityName}`,
    )

    if (!data.data.length) {
      return new Error('Nothing found')
    }

    return data
  } catch (error) {
    return new Error('Something went wrong. Try again')
  }
}
