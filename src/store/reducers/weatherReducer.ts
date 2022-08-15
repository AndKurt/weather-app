import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'

import { IOpenweatherResponse } from '@interfaces/openWeather'
import { IStormglassResponse } from '@interfaces/stormglass'
import { IWeatherStoreData } from '@interfaces/weatherStore'
import { fetchWeatherOpenweathermap, fetchWeatherStormglass } from '@store/actions/weatherAction'
import { getTransformedDataOpenweather, addDataToStormglassData, sortStormglassData } from '@utils/weatherHelpers'

interface IWeatherState {
  isLoading: boolean
  errorMsg: string
  stormGlassData: IWeatherStoreData | null
  openWeatherData: IWeatherStoreData | null
}

const initialState: IWeatherState = {
  isLoading: false,
  errorMsg: '',
  stormGlassData: null,
  openWeatherData: null,
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchWeatherOpenweathermap.pending.type]: (state) => {
      state.isLoading = true
      state.errorMsg = ''
    },
    [fetchWeatherOpenweathermap.fulfilled.type]: (state, { payload }: PayloadAction<IOpenweatherResponse>) => {
      state.openWeatherData = getTransformedDataOpenweather(payload)
      state.isLoading = false
      state.errorMsg = ''
    },
    [fetchWeatherOpenweathermap.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.errorMsg = action.payload
    },
    [fetchWeatherStormglass.pending.type]: (state) => {
      state.isLoading = true
      state.errorMsg = ''
    },
    [fetchWeatherStormglass.fulfilled.type]: (state, { payload }: PayloadAction<IStormglassResponse>) => {
      if (state.openWeatherData) {
        state.stormGlassData = addDataToStormglassData(sortStormglassData(payload), current(state.openWeatherData))
      }
      state.isLoading = false
      state.errorMsg = ''
    },
    [fetchWeatherStormglass.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.errorMsg = action.payload
    },
  },
})

export const weatherReducer = weatherSlice.reducer

// export const weatherReducer = weatherSlice.reducer
// export const {} = weatherSlice.actions
