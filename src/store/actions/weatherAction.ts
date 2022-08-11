import { API_KEY, BASE_URL } from '@constants/api'
import { DAYS_AMOUNT } from '@constants/common'
import { IOpenweatherResponse } from '@interfaces/openWeather'
import { IStormGlassData } from '@interfaces/weatherAPI'
import { MOCK_STORMGLASS_DATA } from '@mock/stormglassData'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { useAppSelector } from '@store/hooks'
import { getNextWeekdayDate } from '@utils/timeDate'
import { getTransformedDataOpenweather, sortStormglassData } from '@utils/weatherHelpers'
import axios from 'axios'
import { RootState } from '..'

export const fetchWeatherOpenweathermap = createAsyncThunk('weather/getOpenweatherAPI', async (_, thunkApi) => {
  try {
    const { locationReducer } = thunkApi.getState() as RootState
    const latitude = locationReducer.locationData?.lat as string
    const lonngitude = locationReducer.locationData?.lon as string
    const response = await axios.get<IOpenweatherResponse>(
      `${BASE_URL.OPENWEATHERMAP}/data/2.5/onecall?lat=${latitude}&lon=${lonngitude}&exclude=minutely,hourly,alerts&appid=${API_KEY.OPENWEATHERMAP}&units=metric`
    )

    console.log(getTransformedDataOpenweather(response.data))

    return response.data
  } catch (error) {
    return thunkApi.rejectWithValue('Ooops... Try to use another API service')
  }
})

export const fetchWeatherStormglass = createAsyncThunk('weather/getStormglassAPI', async (_, thunkApi) => {
  try {
    const nextDay = getNextWeekdayDate(DAYS_AMOUNT)
    const { locationReducer } = thunkApi.getState() as RootState
    const latitude = locationReducer.locationData?.lat as string
    const longitude = locationReducer.locationData?.lon as string

    const response = await axios.get<IStormGlassData>(
      `${BASE_URL.STORMGLASS}?lat=${latitude}&lng=${longitude}&end=${nextDay}&params=airTemperature,cloudCover&source=sg`,
      {
        headers: {
          Authorization: API_KEY.STORMGLASS,
        },
      }
    )

    return sortStormglassData(response.data)
  } catch (error) {
    return thunkApi.rejectWithValue('Ooops... Try to use another API service')
  }
})
