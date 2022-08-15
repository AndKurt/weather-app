import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.COLOR.WHITE};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const WeatherImg = styled.img`
  height: 100px;
  width: 100px;
`

export const Temperature = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE.M};
  text-align: center;
`
