import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ILocationCityNameResponce, ILocationIPResponce } from '@interfaces/locationAPI'

export interface ILocationState {
  isLoading: boolean
  locationData: ILocationIPResponce | null
  errorMsg: string
}

const initialState: ILocationState = {
  isLoading: false,
  locationData: null,
  errorMsg: '',
}

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    getLocationByIPPending(state) {
      state.isLoading = true
      state.errorMsg = ''
    },
    getLocationByIPFullfield(state, { payload }: PayloadAction<ILocationIPResponce>) {
      state.isLoading = false
      state.locationData = payload
    },
    getLocationByIPRejected(state, { payload }: PayloadAction<string>) {
      state.isLoading = false
      state.locationData = null
      state.errorMsg = payload
    },
    getLocationByCityNamePending(state) {
      state.isLoading = true
      state.errorMsg = ''
    },
    getLocationByCityNameFullfield(state, { payload }: PayloadAction<ILocationCityNameResponce>) {
      const data: ILocationIPResponce = {
        country: payload.data[0].country,
        city: payload.data[0].name,
        lat: payload.data[0].latitude,
        lon: payload.data[0].longitude,
      }
      state.isLoading = false
      state.locationData = data
    },
    getLocationByCityNameRejected(state, { payload }: PayloadAction<string>) {
      state.isLoading = false
      state.errorMsg = payload
    },
    resetLocationError(state) {
      state.errorMsg = ''
    },
  },
})

export const locationReducer = locationSlice.reducer
export const {
  getLocationByIPPending,
  getLocationByIPFullfield,
  getLocationByIPRejected,
  getLocationByCityNamePending,
  getLocationByCityNameFullfield,
  getLocationByCityNameRejected,
  resetLocationError,
} = locationSlice.actions
