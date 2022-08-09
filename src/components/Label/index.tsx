import React from 'react'
import { Content } from './styled'

interface ILabel {
  text: string
}

export const Label = ({ text }: ILabel) => {
  return <Content>{text}</Content>
}
