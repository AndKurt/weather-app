import { DAYS_AMOUNT } from '@constants/common'
import { IOpenweatherResponse } from '@interfaces/index'
import { IStormglassResponse, IStormglassSorted } from '@interfaces/stormglass'
import { IWeatherStoreData } from '@interfaces/weatherStore'

import { getWeekDay } from './timeDate'

export const getTransformedDataOpenweather = (data: IOpenweatherResponse) => {
  const transfromedData: IWeatherStoreData = {
    current: {
      today: getWeekDay(data.current.dt),
      temp: Math.round(data.current.temp),
      weather: {
        main: data.current.weather[0].main,
        icon: data.current.weather[0].icon,
        description: data.current.weather[0].description,
      },
    },
    daily: data.daily.slice(1, DAYS_AMOUNT + 1).map((item) => ({
      weekDay: getWeekDay(item.dt),
      temp: Math.round(item.temp.day),
      weather: {
        main: item.weather[0].main,
        icon: item.weather[0].icon,
        description: item.weather[0].description,
      },
    })),
  }

  return transfromedData
}

export const sortStormglassData = (data: IStormglassResponse): IStormglassSorted => {
  const currentHour = new Date().getHours()
  const todayData = data.hours.find((item) => new Date(item.time).getHours() === currentHour)
  const noonArr = data.hours.slice(2).filter((item) => new Date(item?.time as string).getHours() === 12)

  // const noonArr = data.hours
  // .slice(2)
  // .filter((item) => new Date(item?.time as string).getHours() === 12)
  // .slice(0, DAYS_AMOUNT)

  // console.log(data.hours.slice(1).filter((item) => new Date(item?.time as string).getHours() === 12))

  const sortedData: IStormglassSorted = {
    current: {
      today: getWeekDay(Math.floor(new Date(todayData?.time as string).getTime() / 1000)),
      temp: Math.round(todayData?.airTemperature.sg as number),
    },
    days: noonArr.map((item) => ({
      temp: Math.round(item.airTemperature.sg),
      weekDay: getWeekDay(Math.floor(new Date(item?.time as string).getTime() / 1000)),
    })),
  }

  return sortedData
}

export const addDataToStormglassData = (
  stormglassData: IStormglassSorted,
  openweatherStoreData: IWeatherStoreData,
): IWeatherStoreData => {
  const data: IWeatherStoreData = {
    current: {
      temp: stormglassData.current.temp,
      today: stormglassData.current.today,
      weather: openweatherStoreData.current.weather,
    },
    daily: stormglassData.days.slice(1).map((item, index) => ({
      ...item,
      weather: openweatherStoreData.daily[index].weather,
    })),
  }
  return data
}
