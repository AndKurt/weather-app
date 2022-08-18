import { all, fork } from 'redux-saga/effects'

import { calendarSaga } from './calendarSaga'
import { generalSaga } from './generalSaga'
import { locationSaga } from './locationSaga'

export default function* rootSaga() {
  yield all([fork(locationSaga), fork(generalSaga), fork(calendarSaga)])
}
