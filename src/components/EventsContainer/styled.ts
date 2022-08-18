import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  background: rgba(59, 59, 61, 0.3);
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  width: 100%;
`
export const GreetText = styled.h2`
  color: ${({ theme }) => theme.COLOR.WHITE};
  margin-bottom: ${({ theme }) => theme.SPACES[15]}px;
  text-align: center;
  text-shadow: 0px 0px 10px rgba(255, 255, 255, 1);

  @media ${({ theme }) => theme.DEVICE.tablet} {
    margin: ${({ theme }) => theme.SPACES[15]}px 0;
  }
`
