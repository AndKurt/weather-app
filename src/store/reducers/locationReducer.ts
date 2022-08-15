import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ILocationCityNameResponce, ILocationIPResponce } from '@interfaces/locationAPI'
import { fetchLocationByCityName, fetchLocationByIP } from '@store/actions/locationAction'

export interface ILocationState {
  locationData: ILocationIPResponce | null
  isLoading: boolean
  errorMsg: string
}

const initialState: ILocationState = {
  locationData: null,
  isLoading: false,
  errorMsg: '',
}

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchLocationByIP.pending.type]: (state) => {
      state.locationData = null
      state.isLoading = true
      state.errorMsg = ''
    },
    [fetchLocationByIP.fulfilled.type]: (state, { payload }: PayloadAction<ILocationIPResponce>) => {
      state.locationData = payload
      state.isLoading = false
      state.errorMsg = ''
    },
    [fetchLocationByIP.rejected.type]: (state, action: PayloadAction<string>) => {
      state.locationData = null
      state.isLoading = false
      state.errorMsg = action.payload
    },
    [fetchLocationByCityName.pending.type]: (state) => {
      state.locationData = null
      state.isLoading = true
      state.errorMsg = ''
    },
    [fetchLocationByCityName.fulfilled.type]: (state, { payload }: PayloadAction<ILocationCityNameResponce>) => {
      const data: ILocationIPResponce = {
        country: payload.data[0].country,
        city: payload.data[0].name,
        lat: payload.data[0].latitude,
        lon: payload.data[0].longitude,
      }
      state.locationData = data
      state.isLoading = false
      state.errorMsg = ''
    },
    [fetchLocationByCityName.rejected.type]: (state, action: PayloadAction<string>) => {
      state.locationData = null
      state.isLoading = false
      state.errorMsg = action.payload
    },
  },
})

export const locationReducer = locationSlice.reducer
// export const {} = locationSlice.actions
