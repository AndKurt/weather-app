// -----------Openweathermap for Store---------
interface IWeatherKey {
  main: string
  icon: string
  description: string
}

interface ICurrentKey {
  today: string
  temp: number
  weather: IWeatherKey
}

export interface IDaily {
  weekDay: string
  temp: number
  weather: IWeatherKey
}

export interface IWeatherStoreData {
  current: ICurrentKey
  daily: IDaily[]
}

export interface IWeatherLastUpdate {
  day: number
  hour: number
}
