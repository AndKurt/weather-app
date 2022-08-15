// -----------Stormglass API Responce---------
interface AirTemperature {
  sg: number
}

interface Hour {
  airTemperature: AirTemperature
  time: string
}

interface Meta {
  cost: number
  dailyQuota: number
  end: string
  lat: number
  lng: number
  params: string[]
  requestCount: number
  source: string[]
  start: string
}

export interface IStormglassResponse {
  hours: Hour[]
  meta: Meta
}

// -----------Openweathermap sorted data---------
export interface IStormglassSorted {
  current: {
    today: string
    temp: number
  }
  days: { weekDay: string; temp: number }[]
}
