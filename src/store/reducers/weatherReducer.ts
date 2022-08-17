import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IWeatherLastUpdate, IWeatherStoreData } from '@interfaces/weatherStore'
import { getUpdatedTime } from '@utils/weatherHelpers'

export interface IWeatherState {
  isLoading: boolean
  openWeatherData: IWeatherStoreData | null
  openweatherLastUpdate: IWeatherLastUpdate | null
  openweatherError: string
  stormglassData: IWeatherStoreData | null
  stormglassLastUpdate: IWeatherLastUpdate | null
  stormglassError: string
}

const initialState: IWeatherState = {
  isLoading: false,
  openWeatherData: null,
  openweatherLastUpdate: null,
  openweatherError: '',
  stormglassData: null,
  stormglassLastUpdate: null,
  stormglassError: '',
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    getOpenweatherDataPending(state) {
      state.isLoading = true
      state.openweatherError = ''
    },
    getOpenweatherDataFullfield(state, { payload }: PayloadAction<IWeatherStoreData>) {
      state.isLoading = false
      state.openWeatherData = payload
      state.openweatherLastUpdate = getUpdatedTime()
      state.openweatherError = ''
    },
    getOpenweatherDataRejected(state, { payload }: PayloadAction<string>) {
      state.isLoading = false
      state.openweatherLastUpdate = null
      state.openweatherError = payload
    },
    getstormGlassDataPending(state) {
      state.isLoading = true
      state.stormglassError = ''
    },
    getstormGlassDataFullfield(state, { payload }: PayloadAction<IWeatherStoreData>) {
      state.isLoading = false
      state.stormglassData = payload
      state.stormglassLastUpdate = getUpdatedTime()
      state.stormglassError = ''
    },
    getstormGlassDataRejected(state, { payload }: PayloadAction<string>) {
      state.isLoading = false
      state.stormglassLastUpdate = null
      state.stormglassError = payload
    },
    resetWeaterStoreForUpdate(state) {
      state.openweatherLastUpdate = null
      state.openweatherError = ''
      state.stormglassLastUpdate = null
      state.stormglassError = ''
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
  resetWeaterStoreForUpdate,
} = weatherSlice.actions
