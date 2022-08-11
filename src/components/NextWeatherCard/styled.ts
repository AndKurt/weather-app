import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.COLOR.WHITE};
`

export const WeatherImg = styled.img`
  width: 100px;
  height: 100px;
`

export const Temperature = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.M};
`
