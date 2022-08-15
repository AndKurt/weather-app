import React from 'react'
import Select, { SingleValue } from 'react-select'

import { apiOptions } from '@constants/api'
import { IApiOptions } from '@interfaces/apiOptions'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { setCurrentApi } from '@store/reducers/generalReducer'

export const ApiSelector = () => {
  const { currentApi } = useAppSelector((state) => state.generalReducer)
  const dispatch = useAppDispatch()

  const handleChange = (selectedOption: SingleValue<IApiOptions>) => {
    if (selectedOption) {
      dispatch(setCurrentApi(selectedOption))
    }
  }

  return (
    <div style={{ width: '200px' }}>
      <Select options={apiOptions} defaultValue={currentApi} onChange={handleChange} />
    </div>
  )
}
