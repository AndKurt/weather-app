/* eslint-disable operator-linebreak */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import baseBg from '@assets/img/baseBg.webp'
import contenBg from '@assets/img/contenBg.webp'
import { apiOptions } from '@constants/common'
import { IApiOptions } from '@interfaces/apiOptions'
import { IBackgrounds, IUnsplashResponse } from '@interfaces/unsplash'

export interface IGeneralState {
  accessTokenGoogle: string
  isLoading: boolean
  currentApi: IApiOptions
  currentBackground: IBackgrounds
  errorMsg: string
}

const initialState: IGeneralState = {
  accessTokenGoogle: '',
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
      const bg1 = payload.results[0].urls.regular
      const bg2 = payload.results[1].urls.regular
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
    setGoogleToken(state, { payload }: PayloadAction<string>) {
      state.accessTokenGoogle = payload
    },
  },
})

export const generalReducer = generalSlice.reducer
export const { getBackgroundsPending, getBackgroundsFullfield, getBackgroundsRejected, setCurrentApi, setGoogleToken } =
  generalSlice.actions
