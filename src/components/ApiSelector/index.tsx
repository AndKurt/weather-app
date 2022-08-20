import React from 'react'
import Select, { SingleValue } from 'react-select'

import { Loader } from '@components/Loader'
import { apiOptions } from '@constants/common'
import { IApiOptions } from '@interfaces/apiOptions'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { setCurrentApi } from '@store/reducers/generalReducer'

import { Wrapper } from './styled'

export const ApiSelector = () => {
  const { currentApi } = useAppSelector((state) => state.generalReducer)
  const { isLoading } = useAppSelector((state) => state.weatherReducer)
  const dispatch = useAppDispatch()

  const handleChange = (selectedOption: SingleValue<IApiOptions>) => {
    if (selectedOption) {
      dispatch(setCurrentApi(selectedOption))
    }
  }

  return (
    <Wrapper>
      {isLoading && <Loader />}
      <Select options={apiOptions} defaultValue={currentApi} onChange={handleChange} />
    </Wrapper>
  )
}
