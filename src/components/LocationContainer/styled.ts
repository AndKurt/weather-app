import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  align-items: flex-end;
  color: ${({ theme }) => theme.COLOR.WHITE};
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.WIDTH.LOCATION_MAX};
`
export const City = styled.h2`
  cursor: pointer;
  font-size: ${({ theme }) => theme.FONT_SIZE.L};
  margin-bottom: ${({ theme }) => theme.SPACES[15]}px;
  text-align: right;

  @media ${({ theme }) => theme.DEVICE.tablet} {
    font-size: ${({ theme }) => theme.FONT_SIZE.M};
  }
`
export const Country = styled.h3`
  font-size: ${({ theme }) => theme.FONT_SIZE.M};
  text-align: right;
  user-select: none;

  @media ${({ theme }) => theme.DEVICE.tablet} {
    font-size: ${({ theme }) => theme.FONT_SIZE.S};
  }
`

interface IInputCity {
  defaultValue: string
}

export const InputCity = styled.input.attrs<IInputCity>({
  type: 'text',
})`
  text-align: right;
  background: none;
  width: auto;
  height: ${({ theme }) => theme.LINE_HEIGHT.L};
  color: ${({ theme }) => theme.COLOR.LIGHT_GREY};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT[700]};
  font-size: ${({ theme }) => theme.FONT_SIZE.L};
  margin-bottom: ${({ theme }) => theme.SPACES[15]}px;

  @media ${({ theme }) => theme.DEVICE.tablet} {
    font-size: ${({ theme }) => theme.FONT_SIZE.M};
    height: ${({ theme }) => theme.LINE_HEIGHT.M};
  }
`
