import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.COLOR.DARK_GREY};
  bottom: 0;
  display: flex;
  height: 30%;
  justify-content: space-around;
  left: 0;
  padding: ${({ theme }) => theme.SPACES[15]}px ${({ theme }) => theme.SPACES[30]}px;
  position: absolute;
  width: 100%;
`

export const WeekDaysContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-around;
`
