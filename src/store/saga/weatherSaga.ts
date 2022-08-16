/* eslint-disable object-curly-newline */
import { call, put } from 'redux-saga/effects'

import { fetchOpenweather, fetchStormglass } from '@assets/api'
import { API_NAME } from '@constants/common'
import { IOpenweatherResponse } from '@interfaces/openWeather'
import { IStormglassResponse } from '@interfaces/stormglass'
import { IWeatherStoreData } from '@interfaces/weatherStore'
import { IGeneralState } from '@store/reducers/generalReducer'
import { ILocationState } from '@store/reducers/locationReducer'
import {
  getOpenweatherDataFullfield,
  getOpenweatherDataPending,
  getOpenweatherDataRejected,
  getstormGlassDataFullfield,
  getstormGlassDataPending,
  getstormGlassDataRejected,
  IWeatherState,
} from '@store/reducers/weatherReducer'
import { selectState } from '@utils/sagaHelpers'
import { addDataToStormglassData, getTransformedDataOpenweather, sortStormglassData } from '@utils/weatherHelpers'

// eslint-disable-next-line import/no-cycle
import { getBackgrounds } from './generalSaga'

export const getCurrentWeather = function* () {
  const { locationData }: ILocationState = yield selectState<ILocationState>((state) => state.locationReducer)
  const { openWeatherData }: IWeatherState = yield selectState<IWeatherState>((state) => state.weatherReducer)
  const { currentApi }: IGeneralState = yield selectState<IGeneralState>((state) => state.generalReducer)
  const latitude = locationData?.lat as string
  const longitude = locationData?.lon as string

  const isOpenweatherApi = currentApi.value === API_NAME.OPENWEATHER

  yield put(getOpenweatherDataPending())
  const responseOpenweather: IOpenweatherResponse | Error = yield call(fetchOpenweather, latitude, longitude)

  if (responseOpenweather instanceof Error) {
    yield put(getOpenweatherDataRejected(responseOpenweather.message))
  } else {
    const convertedData = getTransformedDataOpenweather(responseOpenweather)
    yield put(getOpenweatherDataFullfield(convertedData))
  }

  if (!isOpenweatherApi) {
    const responseStormglass: IStormglassResponse | Error = yield call(fetchStormglass, latitude, longitude)
    yield put(getstormGlassDataPending())

    if (responseStormglass instanceof Error) {
      yield put(getstormGlassDataRejected(responseStormglass.message))
    } else {
      const sortedStormglassData = sortStormglassData(responseStormglass)
      const convertedData = addDataToStormglassData(sortedStormglassData, openWeatherData as IWeatherStoreData)
      yield put(getstormGlassDataFullfield(convertedData))
    }
  }

  yield call(getBackgrounds)
}
