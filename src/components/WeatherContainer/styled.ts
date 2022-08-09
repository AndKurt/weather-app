import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: auto;
  padding: ${({ theme }) => theme.SPACES[15]}px ${({ theme }) => theme.SPACES[30]}px;
  background: ${({ theme }) => theme.COLOR.DARK_GREY};
  left: 0;
  bottom: 0;
`
