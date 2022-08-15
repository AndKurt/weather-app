import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.COLOR.WHITE};
  display: flex;
`

export const TextContainer = styled.div`
  display: inline-block;
`

export const WeatherImg = styled.img`
  height: 200px;
  width: 200px;
`

export const Temperature = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  margin-top: ${({ theme }) => theme.SPACES[30]}px;
`
