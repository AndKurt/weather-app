/* eslint-disable import/no-cycle */
/* eslint-disable object-curly-newline */
import { call, put } from 'redux-saga/effects'

import { fetchOpenweather, fetchStormglass } from '@api/weatherAPI'
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
  setPrevCity,
} from '@store/reducers/weatherReducer'
import { selectState } from '@utils/sagaHelpers'
import {
  addDataToStormglassData,
  getTransformedDataOpenweather,
  getUpdatedTime,
  sortStormglassData,
} from '@utils/weatherHelpers'

import { getBackgrounds } from './generalSaga'

export const getCurrentWeather = function* () {
  const { locationData }: ILocationState = yield selectState<ILocationState>((state) => state.locationReducer)
  const { openWeatherData, openweatherLastUpdate, stormglassLastUpdate, prevCity }: IWeatherState =
    yield selectState<IWeatherState>((state) => state.weatherReducer)
  const currentDate = getUpdatedTime()

  const { currentApi }: IGeneralState = yield selectState<IGeneralState>((state) => state.generalReducer)
  const latitude = locationData?.lat as string
  const longitude = locationData?.lon as string

  const isOpenweatherApi = currentApi.value === API_NAME.OPENWEATHER

  let openWeatherDataCurrent: IWeatherStoreData | null = null

  if (
    openweatherLastUpdate?.day !== currentDate.day ||
    openweatherLastUpdate.hour + 1 < currentDate.hour ||
    (prevCity && prevCity !== locationData?.city)
  ) {
    yield put(getOpenweatherDataPending())
    const responseOpenweather: IOpenweatherResponse | Error = yield call(fetchOpenweather, latitude, longitude)

    if (responseOpenweather instanceof Error) {
      yield put(getOpenweatherDataRejected(responseOpenweather.message))
    } else {
      const convertedData = getTransformedDataOpenweather(responseOpenweather)
      openWeatherDataCurrent = convertedData
      yield put(getOpenweatherDataFullfield(convertedData))
      yield put(setPrevCity(locationData?.city as string))
      yield call(getBackgrounds)
    }
  }

  if (!isOpenweatherApi) {
    if (stormglassLastUpdate?.day !== currentDate.day || stormglassLastUpdate.hour + 1 < currentDate.hour) {
      const responseStormglass: IStormglassResponse | Error = yield call(fetchStormglass, latitude, longitude)
      yield put(getstormGlassDataPending())

      if (responseStormglass instanceof Error) {
        yield put(getstormGlassDataRejected(responseStormglass.message))
      } else {
        const sortedStormglassData = sortStormglassData(responseStormglass)
        const convertedData = addDataToStormglassData(
          sortedStormglassData,
          openWeatherDataCurrent || (openWeatherData as IWeatherStoreData),
        )
        yield put(getstormGlassDataFullfield(convertedData))
        if (prevCity && prevCity !== locationData?.city) {
          yield call(getBackgrounds)
        }
      }
    }
  }
}
