import { API_KEY, BASE_URL } from '@constants/api'
import { DAYS_AMOUNT } from '@constants/common'
import { IOpenweathermapData, IStormGlassData } from '@interfaces/weatherAPI'
import { MOCK_STORMGLASS_DATA } from '@mock/stormglassData'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { useAppSelector } from '@store/hooks'
import { getNextWeekdayDate } from '@utils/timeDate'
import { sortStormglassData } from '@utils/weatherHelpers'
import axios from 'axios'

export const fetchWeatherOpenweathermap = createAsyncThunk('weather/getOpenweatherAPI', async (_, thunkApi) => {
  try {
    const { locationData } = useAppSelector((state) => state.locationReducer)
    const response = await axios.get(
      `${BASE_URL.OPENWEATHERMAP}/data/2.5/weather?lat=${locationData?.lat}&lon=${locationData?.lon}&appid=${API_KEY.OPENWEATHERMAP}&units=metric`
    )

    console.log(response.data)

    return response.data
  } catch (error) {
    return thunkApi.rejectWithValue('Ooops... Try to use another API service')
  }
})

export const fetchWeatherStormglass = createAsyncThunk('weather/getStormglassAPI', async (_, thunkApi) => {
  try {
    const nextDay = getNextWeekdayDate(DAYS_AMOUNT)
    const { locationData } = useAppSelector((state) => state.locationReducer)

    //const response = await axios.get<IStormGlassData>(
    //  `${BASE_URL.STORMGLASS}?lat=${locationData?.lat}&lng=${locationData?.lon}&end=${nextDay}&params=airTemperature,cloudCover&source=sg`,
    //  {
    //    headers: {
    //      Authorization: API_KEY.STORMGLASS,
    //    },
    //  }
    //)

    return sortStormglassData(MOCK_STORMGLASS_DATA)
    //return sortStormglassData(response.data)
  } catch (error) {
    return thunkApi.rejectWithValue('Ooops... Try to use another API service')
  }
})
