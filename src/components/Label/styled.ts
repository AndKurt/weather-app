import styled from 'styled-components/macro'

export const Content = styled.p`
  background: ${({ theme }) => theme.COLOR.DARK_BLUE};
  border-radius: 25px;
  color: ${({ theme }) => theme.COLOR.LIGHT_GREY};
  display: inline-block;
  font-size: ${({ theme }) => theme.FONT_SIZE.M};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT[700]};
  height: 32px;
  padding: ${({ theme }) => theme.SPACES[5]}px ${({ theme }) => theme.SPACES[10]}px;
  text-transform: uppercase;
  user-select: none;
`
