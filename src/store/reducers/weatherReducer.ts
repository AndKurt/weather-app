import { IOpenweathermapStoreData, IOpenweatherResponse } from '@interfaces/openWeather'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchWeatherOpenweathermap, fetchWeatherStormglass } from '@store/actions/weatherAction'
import { getTransformedDataOpenweather } from '@utils/weatherHelpers'

interface IWeatherState {
  isLoading: boolean
  errorMsg: string
  //stormGlassData: IStormGlassData | null
  openWeatherData: IOpenweathermapStoreData | null
}

const initialState: IWeatherState = {
  isLoading: false,
  errorMsg: '',
  //stormGlassData: null,
  openWeatherData: null,
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchWeatherOpenweathermap.pending.type]: (state) => {
      state.openWeatherData = null
      state.isLoading = true
      state.errorMsg = ''
    },
    [fetchWeatherOpenweathermap.fulfilled.type]: (state, { payload }: PayloadAction<IOpenweatherResponse>) => {
      state.openWeatherData = getTransformedDataOpenweather(payload)
      state.isLoading = false
      state.errorMsg = ''
    },
    [fetchWeatherOpenweathermap.rejected.type]: (state, action: PayloadAction<string>) => {
      state.openWeatherData = null
      state.isLoading = false
      state.errorMsg = action.payload
    },
    //[fetchWeatherStormglass.pending.type]: (state) => {
    //  state.stormGlassData = null
    //  state.isLoading = true
    //  state.errorMsg = ''
    //},
    //[fetchWeatherStormglass.fulfilled.type]: (state, { payload }: PayloadAction<IStormGlassData>) => {
    //  state.stormGlassData = payload
    //  state.isLoading = false
    //  state.errorMsg = ''
    //},
    //[fetchWeatherStormglass.rejected.type]: (state, action: PayloadAction<string>) => {
    //  state.stormGlassData = null
    //  state.isLoading = false
    //  state.errorMsg = action.payload
    //},
  },
})

export const weatherReducer = weatherSlice.reducer

//export const weatherReducer = weatherSlice.reducer
//export const {} = weatherSlice.actions
