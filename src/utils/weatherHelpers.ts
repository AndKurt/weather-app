import { IStormGlassData } from '@interfaces/weatherAPI'

export const sortStormglassData = (data: IStormGlassData) => {
  return data.hours.filter((e) => e.time.includes('T12'))
}
