/* eslint-disable object-curly-newline */
import { all, call, put, takeEvery } from 'redux-saga/effects'

import { fetchUnsplashApi } from '@assets/api'
import { API_NAME } from '@constants/common'
import { IUnsplashResponse } from '@interfaces/unsplash'
import {
  getBackgroundsFullfield,
  getBackgroundsPending,
  getBackgroundsRejected,
  IGeneralState,
  setCurrentApi,
} from '@store/reducers/generalReducer'
import { IWeatherState } from '@store/reducers/weatherReducer'
import { selectState } from '@utils/sagaHelpers'

// eslint-disable-next-line import/no-cycle
import { getCurrentWeather } from './weatherSaga'

export const getBackgrounds = function* () {
  const { openWeatherData, stormGlassData }: IWeatherState = yield selectState<IWeatherState>(
    (state) => state.weatherReducer,
  )
  const { currentApi }: IGeneralState = yield selectState<IGeneralState>((state) => state.generalReducer)

  const isOpenweatherApi = currentApi.value === API_NAME.OPENWEATHER
  const photoName = isOpenweatherApi
    ? openWeatherData?.current.weather.description
    : stormGlassData?.current.weather.description

  yield put(getBackgroundsPending())
  const response: IUnsplashResponse | Error = yield call(fetchUnsplashApi, photoName as string)

  if (response instanceof Error) {
    yield put(getBackgroundsRejected(response.message))
  } else {
    yield put(getBackgroundsFullfield(response))
  }
}

const workSetCurrentApi = function* () {
  yield call(getCurrentWeather)
}

const watchCurrentApi = function* () {
  yield takeEvery(setCurrentApi.type, workSetCurrentApi)
}

export const generalSaga = function* () {
  yield all([watchCurrentApi()])
}
