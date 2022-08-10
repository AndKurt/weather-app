import { API_KEY, BASE_URL, GEO_BY_IP_URL } from '@constants/api'
import { ILocationCityNameResponce, ILocationIPResponce } from '@interfaces/api'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchLocationByIP = createAsyncThunk('location/getLocationByIP', async (_, thunkApi) => {
  try {
    const response = await axios.get<ILocationIPResponce>(GEO_BY_IP_URL)
    return response.data
  } catch (error) {
    return thunkApi.rejectWithValue('Nothing found')
  }
})

export const fetchLocationByCityName = createAsyncThunk(
  'location/getLocationByCityName',
  async (cityName: string, thunkApi) => {
    try {
      const response = await axios.get<ILocationCityNameResponce>(
        `${BASE_URL.POSITIONSTACK}/forward?access_key=${API_KEY.POSITIONSTACK}&query=${cityName}`
      )
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue('Nothing found')
    }
  }
)
