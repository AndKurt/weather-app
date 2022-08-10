//--------------STORMGLASS------------
interface IAirTemperatureStormglass {
  sg: number
}

interface ICloudCoverStormglass {
  sg: number
}

interface IItemStormglass {
  airTemperature: IAirTemperatureStormglass
  cloudCover: ICloudCoverStormglass
  time: string
}

export interface IStormGlassData {
  hours: IItemStormglass[]
}

//-----------Openweathermap---------
export interface IOpenweathermapData {}
