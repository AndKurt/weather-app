import { IApiOptions } from '@interfaces/apiOptions'

export const DAYS_AMOUNT = 6

export const API_NAME = {
  OPENWEATHER: 'OpenweatherAPI',
  STORMGLASS: 'StormglassAPI',
}

export const apiOptions: IApiOptions[] = [
  {
    value: API_NAME.OPENWEATHER,
    label: API_NAME.OPENWEATHER,
  },
  {
    value: API_NAME.STORMGLASS,
    label: API_NAME.STORMGLASS,
  },
]

export const BASE_WEATHER_DESCRIPTION = 'clear sky'
