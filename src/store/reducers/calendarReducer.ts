import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IGoogleCalendarSorted } from '@interfaces/calendar'

interface ICalendarState {
  isLoading: boolean
  calendarData: IGoogleCalendarSorted | null
  errorMsg: string
}

const initialState: ICalendarState = {
  isLoading: false,
  calendarData: null,
  errorMsg: '',
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
      state.errorMsg = payload
    },
  },
})

export const calendarReducer = calendarSlice.reducer
export const { getCalendarDataPending, getCalendarDataFullfield, getCalendarDataRejected } = calendarSlice.actions
