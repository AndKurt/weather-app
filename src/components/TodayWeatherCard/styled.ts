import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.COLOR.WHITE};
  display: flex;

  @media ${({ theme }) => theme.DEVICE.laptop} {
    justify-content: center;
    position: sticky;
    top: 0px;
  }
  @media ${({ theme }) => theme.DEVICE.tablet} {
    flex-direction: column;
  }
`

export const TextContainer = styled.div`
  display: inline-block;
`

export const WeatherImg = styled.img`
  ${({ theme }) => theme.IMG_SIZE.CURRENT_DAY.L}

  @media ${({ theme }) => theme.DEVICE.laptop} {
    ${({ theme }) => theme.IMG_SIZE.CURRENT_DAY.M}
  }

  @media ${({ theme }) => theme.DEVICE.tablet} {
    ${({ theme }) => theme.IMG_SIZE.CURRENT_DAY.S}
  }

  @media ${({ theme }) => theme.DEVICE.mobileL} {
    ${({ theme }) => theme.IMG_SIZE.CURRENT_DAY.XS}
  }
`

export const Temperature = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  margin-top: ${({ theme }) => theme.SPACES[30]}px;

  @media ${({ theme }) => theme.DEVICE.laptop} {
    margin-top: ${({ theme }) => theme.SPACES[5]}px;
    font-size: ${({ theme }) => theme.FONT_SIZE.L};
    text-align: center;
  }

  @media ${({ theme }) => theme.DEVICE.tablet} {
    font-size: ${({ theme }) => theme.FONT_SIZE.M};
  }
`
