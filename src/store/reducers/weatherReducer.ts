import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IWeatherStoreData } from '@interfaces/weatherStore'

export interface IWeatherState {
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
  reducers: {
    getOpenweatherDataPending(state) {
      state.isLoading = true
      state.errorMsg = ''
    },
    getOpenweatherDataFullfield(state, { payload }: PayloadAction<IWeatherStoreData>) {
      state.isLoading = false
      state.openWeatherData = payload
      state.errorMsg = ''
    },
    getOpenweatherDataRejected(state, { payload }: PayloadAction<string>) {
      state.isLoading = false
      state.errorMsg = payload
    },
    getstormGlassDataPending(state) {
      state.isLoading = true
      state.errorMsg = ''
    },
    getstormGlassDataFullfield(state, { payload }: PayloadAction<IWeatherStoreData>) {
      state.isLoading = true
      state.stormGlassData = payload
      state.errorMsg = ''
    },
    getstormGlassDataRejected(state, { payload }: PayloadAction<string>) {
      state.isLoading = false
      state.errorMsg = payload
    },
  },
})

export const weatherReducer = weatherSlice.reducer
export const {
  getOpenweatherDataPending,
  getOpenweatherDataFullfield,
  getOpenweatherDataRejected,
  getstormGlassDataPending,
  getstormGlassDataFullfield,
  getstormGlassDataRejected,
} = weatherSlice.actions
