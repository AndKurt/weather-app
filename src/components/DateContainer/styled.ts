import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  width: ${({ theme }) => theme.WIDTH.DATE_MAX};
  color: ${({ theme }) => theme.COLOR.WHITE};
`

export const TimeBlock = styled.div`
  display: flex;
  align-items: flex-end;
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
export const Date = styled.h3`
  font-size: ${({ theme }) => theme.FONT_SIZE.M};
  line-height: ${({ theme }) => theme.LINE_HEIGHT.M};
  text-transform: capitalize;
`
