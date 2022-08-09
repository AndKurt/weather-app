import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: ${({ theme }) => theme.WIDTH.LOCATION_MAX};
  color: ${({ theme }) => theme.COLOR.WHITE};
`
export const City = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE.L};
  margin-bottom: ${({ theme }) => theme.SPACES[15]}px;
  cursor: pointer;
`
export const Country = styled.h3`
  font-size: ${({ theme }) => theme.FONT_SIZE.M};
  user-select: none;
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
  height: ${({ theme }) => theme.FONT_SIZE.L};
  color: ${({ theme }) => theme.COLOR.LIGHT_GREY};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT[700]};
  font-size: ${({ theme }) => theme.FONT_SIZE.L};
  margin-bottom: ${({ theme }) => theme.SPACES[15]}px;
`
