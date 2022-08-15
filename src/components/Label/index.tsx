import React from 'react'

import { Content } from './styled'

interface ILabel {
  text: string
}

export const Label = ({ text }: ILabel) => <Content>{text}</Content>
