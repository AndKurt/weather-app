import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.COLOR.DARK_GREY};
  bottom: 0;
  display: flex;
  height: 30%;
  justify-content: space-around;
  left: 0;
  overflow-y: auto;
  padding: ${({ theme }) => theme.SPACES[15]}px ${({ theme }) => theme.SPACES[30]}px;
  position: absolute;
  width: 100%;

  @media ${({ theme }) => theme.DEVICE.laptop} {
    height: 20%;
  }
  @media ${({ theme }) => theme.DEVICE.tablet} {
    padding: ${({ theme }) => theme.SPACES[5]}px ${({ theme }) => theme.SPACES[15]}px;
  }
`

export const WeekDaysContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
