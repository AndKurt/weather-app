import { IOpenweatherResponse } from '@interfaces/openWeather'

export const MOCK_OPENWEATHER_DATA: IOpenweatherResponse = {
  lat: 53.9007,
  lon: 27.5709,
  timezone: 'Europe/Minsk',
  timezone_offset: 10800,
  current: {
    dt: 1660242835,
    sunrise: 1660185630,
    sunset: 1660240173,
    temp: 19.95,
    feels_like: 19.99,
    pressure: 1024,
    humidity: 76,
    dew_point: 15.6,
    uvi: 0,
    clouds: 0,
    visibility: 10000,
    wind_speed: 3.26,
    wind_deg: 66,
    wind_gust: 6.97,
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01n',
      },
    ],
  },
  daily: [
    {
      dt: 1660212000,
      sunrise: 1660185630,
      sunset: 1660240173,
      moonrise: 1660241640,
      moonset: 1660179000,
      moon_phase: 0.47,
      temp: {
        day: 23.17,
        min: 13.86,
        max: 24.04,
        night: 19.32,
        eve: 21.31,
        morn: 14.85,
      },
      feels_like: {
        day: 22.77,
        night: 19.32,
        eve: 21.22,
        morn: 14.53,
      },
      pressure: 1024,
      humidity: 47,
      dew_point: 11.05,
      wind_speed: 5.49,
      wind_deg: 66,
      wind_gust: 7.38,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: 4,
      pop: 0.03,
      uvi: 5.51,
    },
    {
      dt: 1660298400,
      sunrise: 1660272137,
      sunset: 1660326449,
      moonrise: 1660329240,
      moonset: 1660271160,
      moon_phase: 0.5,
      temp: {
        day: 24.54,
        min: 14.05,
        max: 25.52,
        night: 18.57,
        eve: 22.71,
        morn: 14.87,
      },
      feels_like: {
        day: 24.22,
        night: 18.21,
        eve: 22.55,
        morn: 14.42,
      },
      pressure: 1024,
      humidity: 45,
      dew_point: 11.79,
      wind_speed: 4.58,
      wind_deg: 61,
      wind_gust: 7.07,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: 2,
      pop: 0,
      uvi: 5.6,
    },
    {
      dt: 1660384800,
      sunrise: 1660358643,
      sunset: 1660412723,
      moonrise: 1660416540,
      moonset: 1660363200,
      moon_phase: 0.55,
      temp: {
        day: 24.13,
        min: 15.13,
        max: 24.13,
        night: 19.07,
        eve: 22.22,
        morn: 15.8,
      },
      feels_like: {
        day: 24.03,
        night: 19.04,
        eve: 22.27,
        morn: 15.39,
      },
      pressure: 1020,
      humidity: 55,
      dew_point: 14.52,
      wind_speed: 5.38,
      wind_deg: 68,
      wind_gust: 10.29,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: 95,
      pop: 0.2,
      rain: 0.13,
      uvi: 4.7,
    },
    {
      dt: 1660471200,
      sunrise: 1660445150,
      sunset: 1660498996,
      moonrise: 1660503660,
      moonset: 1660455060,
      moon_phase: 0.59,
      temp: {
        day: 27.41,
        min: 16.84,
        max: 28.52,
        night: 22.33,
        eve: 28.41,
        morn: 17.18,
      },
      feels_like: {
        day: 27.82,
        night: 22.5,
        eve: 29.13,
        morn: 16.99,
      },
      pressure: 1015,
      humidity: 50,
      dew_point: 16.04,
      wind_speed: 6.57,
      wind_deg: 73,
      wind_gust: 12.51,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: 78,
      pop: 0.22,
      rain: 0.26,
      uvi: 4.9,
    },
    {
      dt: 1660557600,
      sunrise: 1660531656,
      sunset: 1660585268,
      moonrise: 1660590720,
      moonset: 1660546620,
      moon_phase: 0.62,
      temp: {
        day: 22.93,
        min: 17.27,
        max: 23.79,
        night: 23.07,
        eve: 23.79,
        morn: 17.27,
      },
      feels_like: {
        day: 23.05,
        night: 23.13,
        eve: 23.84,
        morn: 17.45,
      },
      pressure: 1015,
      humidity: 68,
      dew_point: 16.65,
      wind_speed: 6.27,
      wind_deg: 84,
      wind_gust: 12.55,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: 100,
      pop: 0.15,
      uvi: 2.96,
    },
    {
      dt: 1660644000,
      sunrise: 1660618163,
      sunset: 1660671539,
      moonrise: 1660677780,
      moonset: 1660638000,
      moon_phase: 0.66,
      temp: {
        day: 25.77,
        min: 19.03,
        max: 26.64,
        night: 21.34,
        eve: 26.32,
        morn: 19.03,
      },
      feels_like: {
        day: 25.66,
        night: 21.38,
        eve: 26.32,
        morn: 18.84,
      },
      pressure: 1011,
      humidity: 48,
      dew_point: 14.01,
      wind_speed: 6.88,
      wind_deg: 108,
      wind_gust: 13.61,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: 100,
      pop: 0.21,
      rain: 0.11,
      uvi: 4.16,
    },
    {
      dt: 1660730400,
      sunrise: 1660704670,
      sunset: 1660757808,
      moonrise: 1660764900,
      moonset: 1660729200,
      moon_phase: 0.69,
      temp: {
        day: 23.13,
        min: 18,
        max: 25.46,
        night: 22.47,
        eve: 25.46,
        morn: 18,
      },
      feels_like: {
        day: 23.17,
        night: 22.52,
        eve: 25.55,
        morn: 17.87,
      },
      pressure: 1009,
      humidity: 64,
      dew_point: 15.75,
      wind_speed: 3.69,
      wind_deg: 117,
      wind_gust: 8.81,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: 98,
      pop: 0.32,
      rain: 0.32,
      uvi: 5,
    },
    {
      dt: 1660816800,
      sunrise: 1660791177,
      sunset: 1660844076,
      moonrise: 1660852140,
      moonset: 1660820340,
      moon_phase: 0.72,
      temp: {
        day: 27.33,
        min: 17.37,
        max: 29.9,
        night: 23.32,
        eve: 29.18,
        morn: 17.37,
      },
      feels_like: {
        day: 27.74,
        night: 23.22,
        eve: 29.09,
        morn: 17.54,
      },
      pressure: 1011,
      humidity: 50,
      dew_point: 15.88,
      wind_speed: 3.53,
      wind_deg: 233,
      wind_gust: 5.13,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: 26,
      pop: 0.72,
      rain: 1.74,
      uvi: 5,
    },
  ],
}
