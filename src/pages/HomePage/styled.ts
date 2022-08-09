import styled from 'styled-components/macro'

export const Wrapper = styled.main`
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: ${({ theme }) => theme.SPACES[30]}px;
  background: ${({ theme }) => theme.COLOR.WHITE};
`

export const Content = styled.div`
  position: relative;
  z-index: 10;
  max-width: ${({ theme }) => theme.WIDTH.MAX};
  width: 100%;
  height: 80%;
  padding: ${({ theme }) => theme.SPACES[60]}px;
  background: ${({ theme }) => theme.COLOR.LIGHT_BLUE};
  box-shadow: 0px 0px 33px 6px rgba(34, 60, 80, 0.6);
`
