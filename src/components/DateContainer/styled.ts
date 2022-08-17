import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.COLOR.WHITE};
  width: ${({ theme }) => theme.WIDTH.DATE_MAX};

  @media ${({ theme }) => theme.DEVICE.tablet} {
    width: 45%;
    margin-bottom: ${({ theme }) => theme.SPACES[15]}px;
  }
`

export const TimeBlock = styled.div`
  align-items: flex-end;
  display: flex;
  margin-bottom: ${({ theme }) => theme.SPACES[15]}px;
`

export const Time = styled.h1`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  margin-right: ${({ theme }) => theme.SPACES[15]}px;

  @media ${({ theme }) => theme.DEVICE.tablet} {
    font-size: ${({ theme }) => theme.FONT_SIZE.L};
    margin-right: ${({ theme }) => theme.SPACES[10]}px;
  }
  @media ${({ theme }) => theme.DEVICE.mobileL} {
    font-size: ${({ theme }) => theme.FONT_SIZE.M};
    margin-right: ${({ theme }) => theme.SPACES[5]}px;
  }
`
export const Format = styled.h3`
  font-size: ${({ theme }) => theme.FONT_SIZE.M};
  line-height: ${({ theme }) => theme.LINE_HEIGHT.M};
  text-transform: uppercase;

  @media ${({ theme }) => theme.DEVICE.tablet} {
    font-size: ${({ theme }) => theme.FONT_SIZE.S};
    line-height: ${({ theme }) => theme.LINE_HEIGHT.S};
  }
`
export const DateInfo = styled.h3`
  font-size: ${({ theme }) => theme.FONT_SIZE.M};
  line-height: ${({ theme }) => theme.LINE_HEIGHT.M};
  text-transform: capitalize;

  @media ${({ theme }) => theme.DEVICE.tablet} {
    font-size: ${({ theme }) => theme.FONT_SIZE.S};
    line-height: ${({ theme }) => theme.LINE_HEIGHT.S};
  }
`
