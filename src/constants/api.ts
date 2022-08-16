import { IApiOptions } from '@interfaces/apiOptions'

import { API_NAME } from './common'

export const API_KEY = {
  OPENWEATHERMAP: '3f9c3d6215b021dda7749d511c003390',
  // STORMGLASS: '138b273e-181d-11ed-a3aa-0242ac130002-138b27f2-181d-11ed-a3aa-0242ac130002',
  STORMGLASS: 'e402c46e-18cf-11ed-a226-0242ac130002-e402c572-18cf-11ed-a226-0242ac130002',
  // STORMGLASS: '9a21acfa-18d6-11ed-93b0-0242ac130002-9a21adae-18d6-11ed-93b0-0242ac130002',
  POSITIONSTACK: '6c25aead701f2d40ce6d9c02f41aadae',
  UNSPLASH: 'iWpE0mNximbdS5XN_rXOCD2gA8yDL0g1cWnaHxXg8Ck',
}

export const BASE_URL = {
  OPENWEATHERMAP: 'https://api.openweathermap.org',
  OPENWEATHERMAP_IMG: ' http://openweathermap.org/img/wn',
  STORMGLASS: 'https://api.stormglass.io/v2/weather/point',
  POSITIONSTACK: 'http://api.positionstack.com/v1',
  UNSPLASH: 'https://api.unsplash.com/search',
}

export const GEO_BY_IP_URL = 'http://ip-api.com/json/?fields=country,city,lat,lon'
export const GEO_BY_CITY_NAME_URL = 'http://ip-api.com/json/?fields=country,city,lat,lon'

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
