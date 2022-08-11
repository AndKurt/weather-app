import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-around;
  width: 100%;
  height: 30%;
  padding: ${({ theme }) => theme.SPACES[15]}px ${({ theme }) => theme.SPACES[30]}px;
  background: ${({ theme }) => theme.COLOR.DARK_GREY};
  left: 0;
  bottom: 0;
`

export const WeekDaysContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
`
