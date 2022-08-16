/* eslint-disable object-curly-newline */
import { all, call, put, takeEvery } from 'redux-saga/effects'

import { fetchLocationByCityName, fetchLocationByIP } from '@assets/api/locationAPI'
import { ILocationCityNameResponce, ILocationIPResponce } from '@interfaces/locationAPI'
import { IActioWorker } from '@interfaces/saga'
import {
  getLocationByIPPending,
  getLocationByIPRejected,
  getLocationByIPFullfield,
  getLocationByCityNameRejected,
  getLocationByCityNameFullfield,
  getLocationByCityNamePending,
} from '@store/reducers/locationReducer'

import { getCurrentWeather } from './weatherSaga'

const workGetCityByIP = function* () {
  const response: ILocationIPResponce | Error = yield call(fetchLocationByIP)
  if (response instanceof Error) {
    yield put(getLocationByIPRejected(response.message))
  } else {
    yield put(getLocationByIPFullfield(response))
    yield call(getCurrentWeather)
  }
}

const watchGetCityByIPSaga = function* () {
  yield takeEvery(getLocationByIPPending, workGetCityByIP)
}

const workGetCityByCityName = function* (action: IActioWorker) {
  const response: ILocationCityNameResponce | Error = yield call(fetchLocationByCityName, action.payload)

  if (response instanceof Error) {
    yield put(getLocationByCityNameRejected(response.message))
  } else {
    yield put(getLocationByCityNameFullfield(response))
    yield call(getCurrentWeather)
  }
}

const watchGetCityByCityNameSaga = function* () {
  yield takeEvery(getLocationByCityNamePending.type, workGetCityByCityName)
}

export const locationSaga = function* () {
  yield all([watchGetCityByIPSaga(), watchGetCityByCityNameSaga()])
}
