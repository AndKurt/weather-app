import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.COLOR.WHITE};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${({ theme }) => theme.DEVICE.laptop} {
    width: 30%;
    padding-bottom: ${({ theme }) => theme.SPACES[30]}px;
    margin-bottom: ${({ theme }) => theme.SPACES[30]}px;
    border-bottom: 1px solid ${({ theme }) => theme.COLOR.LIGHT_GREY};
  }

  @media ${({ theme }) => theme.DEVICE.mobileL} {
    padding-bottom: ${({ theme }) => theme.SPACES[15]}px;
    margin-bottom: ${({ theme }) => theme.SPACES[15]}px;
    width: 50%;
  }
`

export const WeatherImg = styled.img`
  ${({ theme }) => theme.IMG_SIZE.NEXT_DAY.L};

  @media ${({ theme }) => theme.DEVICE.laptop} {
    ${({ theme }) => theme.IMG_SIZE.NEXT_DAY.M};
  }

  @media ${({ theme }) => theme.DEVICE.mobileL} {
    ${({ theme }) => theme.IMG_SIZE.NEXT_DAY.S};
  }
`

export const Temperature = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE.M};
  text-align: center;

  @media ${({ theme }) => theme.DEVICE.mobileL} {
    font-size: ${({ theme }) => theme.FONT_SIZE.S};
  }
`
