import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.COLOR.WHITE};
  width: ${({ theme }) => theme.WIDTH.DATE_MAX};
`

export const TimeBlock = styled.div`
  align-items: flex-end;
  display: flex;
  margin-bottom: ${({ theme }) => theme.SPACES[15]}px;
`

export const Time = styled.h1`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  margin-right: ${({ theme }) => theme.SPACES[15]}px;
`
export const Format = styled.h3`
  font-size: ${({ theme }) => theme.FONT_SIZE.M};
  line-height: ${({ theme }) => theme.LINE_HEIGHT.M};
  text-transform: uppercase;
`
export const DateInfo = styled.h3`
  font-size: ${({ theme }) => theme.FONT_SIZE.M};
  line-height: ${({ theme }) => theme.LINE_HEIGHT.M};
  text-transform: capitalize;
`
