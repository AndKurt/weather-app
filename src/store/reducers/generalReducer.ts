import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { API_NAME } from '@constants/common'
import { IApiOptions } from '@interfaces/apiOptions'
import { apiOptions } from '@constants/api'
import baseBg from '@assets/img/baseBg.jpg'
import contenBg from '@assets/img/contenBg.jpg'
import { fetchBackgrounds } from '@store/actions/generalAction'
import { IBackgrounds, IUnsplashResponse } from '@interfaces/unsplash'

interface IInitialState {
  isLoading: boolean
  currentApi: IApiOptions
  currentBackground: IBackgrounds
  errorMsg: string
}

const initialState: IInitialState = {
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
    setCurrentApi(state, { payload }: PayloadAction<IApiOptions>) {
      state.currentApi = payload
    },
  },
  extraReducers: {
    [fetchBackgrounds.pending.type]: (state) => {
      state.isLoading = true
      state.errorMsg = ''
    },
    [fetchBackgrounds.fulfilled.type]: (state, { payload }: PayloadAction<IUnsplashResponse>) => {
      const bg1 = payload.results[0].urls.full
      const bg2 = payload.results[1].urls.full
      state.currentBackground = { bg1: bg1, bg2: bg2 }
      state.isLoading = false
      state.errorMsg = ''
    },
    [fetchBackgrounds.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.errorMsg = action.payload
    },
  },
})

export const generalReducer = generalSlice.reducer
export const { setCurrentApi } = generalSlice.actions
