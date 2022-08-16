import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IWeatherStoreData } from '@interfaces/weatherStore'

export interface IWeatherState {
  isLoading: boolean
  // errorMsg: string
  stormGlassData: IWeatherStoreData | null
  openWeatherData: IWeatherStoreData | null
}

const initialState: IWeatherState = {
  isLoading: false,
  // errorMsg: '',
  stormGlassData: null,
  openWeatherData: null,
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    getOpenweatherDataPending(state) {
      state.isLoading = true
      if (state.openWeatherData) {
        state.openWeatherData = { ...state.openWeatherData, errorMsg: '' }
      }
    },
    getOpenweatherDataFullfield(state, { payload }: PayloadAction<IWeatherStoreData>) {
      state.isLoading = false
      state.openWeatherData = payload
      // state.errorMsg = ''
    },
    getOpenweatherDataRejected(state, { payload }: PayloadAction<string>) {
      state.isLoading = false
      if (state.openWeatherData) {
        state.openWeatherData = { ...state.openWeatherData, errorMsg: payload }
      }
      // state.errorMsg = payload
    },
    getstormGlassDataPending(state) {
      state.isLoading = true
      if (state.stormGlassData) {
        state.stormGlassData = { ...state.stormGlassData, errorMsg: '' }
      }
      // state.errorMsg = ''
    },
    getstormGlassDataFullfield(state, { payload }: PayloadAction<IWeatherStoreData>) {
      state.isLoading = false
      state.stormGlassData = payload
      // state.errorMsg = ''
    },
    getstormGlassDataRejected(state, { payload }: PayloadAction<string>) {
      state.isLoading = false
      if (state.stormGlassData) {
        state.stormGlassData = { ...state.stormGlassData, errorMsg: payload }
      }
      // state.errorMsg = payload
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
