import { DAYS_AMOUNT } from '@constants/common'
import { IOpenweathermapStoreData, IOpenweatherResponse } from '@interfaces/openWeather'
import { IStormGlassData } from '@interfaces/weatherAPI'
import { getWeekDay } from './timeDate'

export const sortStormglassData = (data: IStormGlassData) => {
  return data.hours.filter((e) => e.time.includes('T12'))
}

export const getTransformedDataOpenweather = (data: IOpenweatherResponse) => {
  const transfromedData: IOpenweathermapStoreData = {
    current: {
      today: getWeekDay(data.current.dt),
      temp: Math.round(data.current.temp),
      weather: {
        main: data.current.weather[0].main,
        icon: data.current.weather[0].icon,
        description: data.current.weather[0].description,
      },
    },
    daily: data.daily.slice(0, DAYS_AMOUNT).map((item) => {
      return {
        weekDay: getWeekDay(item.dt),
        temp: Math.round(item.temp.day),
        weather: {
          main: item.weather[0].main,
          icon: item.weather[0].icon,
          description: item.weather[0].description,
        },
      }
    }),
  }

  return transfromedData
}
