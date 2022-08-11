import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  color: ${({ theme }) => theme.COLOR.WHITE};
`

export const TextContainer = styled.div`
  display: inline-block;
`

export const WeatherImg = styled.img`
  width: 200px;
  height: 200px;
`

export const Temperature = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  margin-top: ${({ theme }) => theme.SPACES[30]}px;
`
