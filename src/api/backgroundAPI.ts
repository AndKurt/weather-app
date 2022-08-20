import axios from 'axios'

import { IUnsplashResponse } from '@interfaces/unsplash'

export const fetchUnsplashApi = async (photoName: string): Promise<IUnsplashResponse | Error> => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL_UNSPLASH}/photos?page=1&per_page=2&orientation=landscape&query=${photoName}&client_id=${process.env.REACT_APP_API_KEY_UNSPLASH}`,
    )
    return data
  } catch (error) {
    return new Error('Nothing found by search with UnsplahAPI')
  }
}
