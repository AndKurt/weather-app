import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.COLOR.LIGHT_GREY};
  color: ${({ theme }) => theme.COLOR.WHITE};
  margin-bottom: ${({ theme }) => theme.SPACES[10]}px;
  padding: ${({ theme }) => theme.SPACES[5]}px;

  &h3 {
    font-size: ${({ theme }) => theme.FONT_SIZE.L};
  }

  width: 100%;
`
