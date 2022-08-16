import axios, { AxiosResponse } from 'axios'
import { call, put } from 'redux-saga/effects'

import { fetchUnsplashApi } from '@assets/api'
import { API_KEY, BASE_URL } from '@constants/api'
import { API_NAME } from '@constants/common'
import { IOpenweatherResponse } from '@interfaces/openWeather'
import { IUnsplashResponse } from '@interfaces/unsplash'
import {
  getBackgroundsFullfield,
  getBackgroundsPending,
  getBackgroundsRejected,
  IGeneralState,
} from '@store/reducers/generalReducer'
import { ILocationState } from '@store/reducers/locationReducer'
import {
  getOpenweatherDataFullfield,
  getOpenweatherDataPending,
  getOpenweatherDataRejected,
  IWeatherState,
} from '@store/reducers/weatherReducer'
import { selectState } from '@utils/sagaHelpers'
import { getTransformedDataOpenweather } from '@utils/weatherHelpers'

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

export const getCurrentWeather = function* () {
  const { locationData }: ILocationState = yield selectState<ILocationState>((state) => state.locationReducer)
  const latitude = locationData?.lat
  const lonngitude = locationData?.lon

  // const { currentApi }: IGeneralState = yield selectState<IGeneralState>((state) => state.generalReducer)

  // const isOpenweatherApi = currentApi.value === API_NAME.OPENWEATHER

  try {
    yield put(getOpenweatherDataPending())
    const { data }: AxiosResponse<IOpenweatherResponse> = yield call(
      axios.get,
      `${BASE_URL.OPENWEATHERMAP}/data/2.5/onecall?lat=${latitude}&lon=${lonngitude}&exclude=minutely,hourly,alerts&appid=${API_KEY.OPENWEATHERMAP}&units=metric`,
    )
    const convertedData = getTransformedDataOpenweather(data)
    yield put(getOpenweatherDataFullfield(convertedData))
    yield call(getBackgrounds)
  } catch (error) {
    yield put(getOpenweatherDataRejected('Ooops... Try to use another API service'))
  }
}
