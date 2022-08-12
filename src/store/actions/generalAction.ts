import { API_KEY, BASE_URL } from '@constants/api'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchBackgrounds = createAsyncThunk('general/getBackgrounds', async (photoName: string, thunkApi) => {
  try {
    const response = await axios.get(
      `${BASE_URL.UNSPLASH}/photos?page=1&per_page=2&orientation=landscape&query=${photoName}&client_id=${API_KEY.UNSPLASH}`
    )

    return response.data
  } catch (error) {
    return thunkApi.rejectWithValue('Nothing found by search')
  }
})
