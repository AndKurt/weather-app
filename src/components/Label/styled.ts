import styled from 'styled-components/macro'

export const Content = styled.p`
  display: inline-block;
  border-radius: 25px;
  user-select: none;
  text-transform: uppercase;
  height: 32px;
  padding: ${({ theme }) => theme.SPACES[5]}px ${({ theme }) => theme.SPACES[10]}px;
  font-size: ${({ theme }) => theme.FONT_SIZE.M};
  color: ${({ theme }) => theme.COLOR.LIGHT_GREY};
  background: ${({ theme }) => theme.COLOR.DARK_BLUE};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT[700]};
`
