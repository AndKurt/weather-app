import { all, fork } from 'redux-saga/effects'

import { generalSaga } from './generalSaga'
import { locationSaga } from './locationSaga'

export default function* rootSaga() {
  yield all([fork(locationSaga), fork(generalSaga)])
}
