//--------------STORMGLASS------------
interface IStormglassSgKey {
  sg: number
}

interface IItemStormglass {
  airTemperature: IStormglassSgKey
  cloudCover: IStormglassSgKey
  time: string
}

export interface IStormGlassData {
  hours: IItemStormglass[]
}
