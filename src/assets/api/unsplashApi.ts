import axios from 'axios'

import { API_KEY, BASE_URL } from '@constants/api'
import { IUnsplashResponse } from '@interfaces/unsplash'

export const fetchUnsplashApi = async (photoName: string): Promise<IUnsplashResponse | Error> => {
  try {
    const { data } = await axios.get(
      `${BASE_URL.UNSPLASH}/photos?page=1&per_page=2&orientation=landscape&query=${photoName}&client_id=${API_KEY.UNSPLASH}`,
    )
    return data
  } catch (error) {
    return new Error('Nothing found by search with UnsplahAPI')
  }
}
