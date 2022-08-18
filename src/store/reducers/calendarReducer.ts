import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IGoogleCalendarSorted } from '@interfaces/calendar'
import { IProfileObj } from '@interfaces/googleInit'

interface ICalendarState {
  isLoading: boolean
  calendarData: IGoogleCalendarSorted | null
  errorMsg: string
  isAuth: boolean
  userData: IProfileObj | null
}

const initialState: ICalendarState = {
  isLoading: false,
  calendarData: null,
  errorMsg: '',
  isAuth: false,
  userData: null,
}

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    getCalendarDataPending(state) {
      state.isLoading = true
      state.errorMsg = ''
    },
    getCalendarDataFullfield(state, { payload }: PayloadAction<IGoogleCalendarSorted>) {
      state.isLoading = false
      state.calendarData = payload
    },
    getCalendarDataRejected(state, { payload }: PayloadAction<string>) {
      state.isLoading = false
      state.calendarData = null
      state.errorMsg = payload
    },
    setIsGoogleAuth(state, { payload }: PayloadAction<boolean>) {
      state.isAuth = payload
    },
    setUserData(state, { payload }: PayloadAction<IProfileObj | null>) {
      state.userData = payload
    },
  },
})

export const calendarReducer = calendarSlice.reducer
export const {
  getCalendarDataPending,
  getCalendarDataFullfield,
  getCalendarDataRejected,
  setIsGoogleAuth,
  setUserData,
} = calendarSlice.actions
