/* eslint-disable object-curly-newline */
import { all, call, put, takeEvery } from 'redux-saga/effects'

import { fetchCalendar } from '@api/calendarApi'
import { IGoogleCalendarResponce } from '@interfaces/calendar'
import { IProfileObj } from '@interfaces/googleInit'
import { IActionWorker } from '@interfaces/saga'
import {
  getCalendarDataFullfield,
  getCalendarDataPending,
  getCalendarDataRejected,
  setIsGoogleAuth,
  setUserData,
} from '@store/reducers/calendarReducer'
import { getSortedCalendarData } from '@utils/calendar'

interface IActionWorkerCalendar extends Pick<IActionWorker, 'type'> {
  payload: {
    accessToken: string
    userData: IProfileObj
  }
}

const workGetCalendarData = function* (action: IActionWorkerCalendar) {
  const response: IGoogleCalendarResponce | Error = yield call(fetchCalendar, action.payload.accessToken)
  if (response instanceof Error) {
    yield put(getCalendarDataRejected(response.message))
  } else {
    yield put(setIsGoogleAuth(true))
    yield put(setUserData(action.payload.userData))
    const sortedData = getSortedCalendarData(response)
    yield put(getCalendarDataFullfield(sortedData))
  }
}

const watchGetCalendarData = function* () {
  yield takeEvery(getCalendarDataPending.type, workGetCalendarData)
}

export const calendarSaga = function* () {
  yield all([watchGetCalendarData()])
}
