import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  width: ${({ theme }) => theme.WIDTH.SELECTOR};

  @media ${({ theme }) => theme.DEVICE.tablet} {
    margin-top: ${({ theme }) => theme.SPACES[15]}px;
  }
`
