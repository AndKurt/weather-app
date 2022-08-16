/* eslint-disable operator-linebreak */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import baseBg from '@assets/img/baseBg.jpg'
import contenBg from '@assets/img/contenBg.jpg'
import { apiOptions } from '@constants/api'
import { IApiOptions } from '@interfaces/apiOptions'
import { IBackgrounds, IUnsplashResponse } from '@interfaces/unsplash'

export interface IGeneralState {
  isLoading: boolean
  currentApi: IApiOptions
  currentBackground: IBackgrounds
  errorMsg: string
}

const initialState: IGeneralState = {
  isLoading: false,
  currentApi: apiOptions[0],
  currentBackground: {
    bg1: baseBg,
    bg2: contenBg,
  },
  errorMsg: '',
}

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    getBackgroundsPending(state) {
      state.isLoading = true
      state.errorMsg = ''
    },
    getBackgroundsFullfield(state, { payload }: PayloadAction<IUnsplashResponse>) {
      const bg1 = payload.results[0].urls.full
      const bg2 = payload.results[1].urls.full
      state.currentBackground = {
        bg1,
        bg2,
      }
      state.isLoading = false
      state.errorMsg = ''
    },
    getBackgroundsRejected(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.errorMsg = action.payload
    },
    setCurrentApi(state, { payload }: PayloadAction<IApiOptions>) {
      state.currentApi = payload
    },
  },
})

export const generalReducer = generalSlice.reducer
export const { getBackgroundsPending, getBackgroundsFullfield, getBackgroundsRejected, setCurrentApi } =
  generalSlice.actions
