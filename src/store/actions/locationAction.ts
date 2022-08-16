import { ILocationCityNameResponce, ILocationIPResponce } from '@interfaces/locationAPI'

export const GET_LOCATION_BY_IP = 'GET_LOCATION_BY_IP'
export const GET_LOCATION_BY_CITY_NAME = 'GET_LOCATION_BY_CITY_NAME'

export const getLocationByIp = (payload: ILocationIPResponce) => ({ type: GET_LOCATION_BY_IP, payload })
export const getLocationByCityName = (payload: ILocationCityNameResponce) => ({
  type: GET_LOCATION_BY_CITY_NAME,
  payload,
})

// import { createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios'

// import { API_KEY, BASE_URL, GEO_BY_IP_URL } from '@constants/api'
// import { ILocationCityNameResponce, ILocationIPResponce } from '@interfaces/locationAPI'

// export const fetchLocationByIP = createAsyncThunk('location/getLocationByIP', async (_, thunkApi) => {
//  try {
// const response = await axios.get<ILocationIPResponce>(GEO_BY_IP_URL)
//    return response.data
//  } catch (error) {
//    return thunkApi.rejectWithValue('Nothing found')
//  }
// })

// export const fetchLocationByCityName = createAsyncThunk(
//  'location/getLocationByCityName',
//  async (cityName: string, thunkApi) => {
//    try {
//      const response = await axios.get<ILocationCityNameResponce>(
//        `${BASE_URL.POSITIONSTACK}/forward?access_key=${API_KEY.POSITIONSTACK}&query=${cityName}`,
//      )
//      return response.data
//    } catch (error) {
//      return thunkApi.rejectWithValue('Nothing found')
//    }
//  },
// )
