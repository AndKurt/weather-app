/* eslint-disable object-curly-newline */
import { PayloadAction } from '@reduxjs/toolkit'
import axios, { AxiosResponse } from 'axios'
import { all, call, put, takeEvery } from 'redux-saga/effects'

import { API_KEY, BASE_URL, GEO_BY_IP_URL } from '@constants/api'
import { ILocationCityNameResponce, ILocationIPResponce } from '@interfaces/locationAPI'
import {
  getLocationByIPPending,
  getLocationByIPRejected,
  getLocationByIPFullfield,
  getLocationByCityNameRejected,
  getLocationByCityNameFullfield,
  getLocationByCityNamePending,
} from '@store/reducers/locationReducer'

import { getCurrentWeather } from './weatherSaga'

function* workGetCityByIP() {
  try {
    const { data }: AxiosResponse<ILocationIPResponce> = yield call(axios.get, GEO_BY_IP_URL)
    yield put(getLocationByIPFullfield(data))

    yield call(getCurrentWeather)
  } catch (error) {
    yield put(getLocationByIPRejected('Nothing found'))
  }
}

function* watchGetCityByIPSaga() {
  yield takeEvery(getLocationByIPPending, workGetCityByIP)
}

function* workGetCityByCityName({ payload }: PayloadAction<string>) {
  try {
    const { data }: AxiosResponse<ILocationCityNameResponce> = yield call(
      axios.get,
      `${BASE_URL.POSITIONSTACK}/forward?access_key=${API_KEY.POSITIONSTACK}&query=${payload}`,
    )
    yield put(getLocationByCityNameFullfield(data))
  } catch (error) {
    yield put(getLocationByCityNameRejected('Nothing found'))
  }
}

function* watchGetCityByCityNameSaga() {
  yield takeEvery(getLocationByCityNamePending.type, workGetCityByCityName)
}

export default function* locationSaga() {
  yield all([watchGetCityByIPSaga(), watchGetCityByCityNameSaga()])
}
