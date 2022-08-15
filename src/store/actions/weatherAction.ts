import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { DAYS_AMOUNT, API_KEY, BASE_URL } from '@constants/index'
import { IOpenweatherResponse } from '@interfaces/openWeather'
import { IStormglassResponse } from '@interfaces/stormglass'
import { getNextWeekdayDate } from '@utils/timeDate'

import { RootState } from '..'

export const fetchWeatherOpenweathermap = createAsyncThunk<IOpenweatherResponse | string>(
  'weather/getOpenweatherAPI',
  async (_, thunkApi) => {
    try {
      const { locationReducer } = thunkApi.getState() as RootState
      const latitude = locationReducer.locationData?.lat as string
      const lonngitude = locationReducer.locationData?.lon as string
      const response = await axios.get<IOpenweatherResponse>(
        `${BASE_URL.OPENWEATHERMAP}/data/2.5/onecall?lat=${latitude}&lon=${lonngitude}&exclude=minutely,hourly,alerts&appid=${API_KEY.OPENWEATHERMAP}&units=metric`,
      )

      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue('Ooops... Try to use another API service')
    }
  },
)

export const fetchWeatherStormglass = createAsyncThunk<IStormglassResponse | string>(
  'weather/getStormglassAPI',
  async (_, thunkApi) => {
    try {
      const nextDay = getNextWeekdayDate(DAYS_AMOUNT)
      const { locationReducer } = thunkApi.getState() as RootState
      const latitude = locationReducer.locationData?.lat as string
      const longitude = locationReducer.locationData?.lon as string

      const response = await axios.get<IStormglassResponse>(
        `${BASE_URL.STORMGLASS}?lat=${latitude}&lng=${longitude}&end=${nextDay}&params=airTemperature&source=sg`,
        { headers: { Authorization: API_KEY.STORMGLASS } },
      )

      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue('Ooops... Try to use another API service')
    }
  },
)
