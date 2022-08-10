import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IWeatherState {}

const initialState: IWeatherState = {}

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: {},
})

export const weatherReducer = weatherSlice.reducer
//export const {} = weatherSlice.actions
