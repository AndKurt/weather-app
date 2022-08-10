export interface ILocationIPResponce {
  country: string
  city: string
  lat: string
  lon: string
}

export interface ILocationCityNameResponce {
  data: {
    country: string
    name: string
    latitude: string
    longitude: string
  }[]
}
