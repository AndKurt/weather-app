import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000000;
`

export const Spinner = styled.div`
  display: inline-block;
  border-radius: 50%;
  border: 10px solid ${({ theme }) => theme.SPINNER_COLORS[1]};
  border-top: 10px solid ${({ theme }) => theme.SPINNER_COLORS[2]};
  border-right: 10px solid ${({ theme }) => theme.SPINNER_COLORS[3]};
  border-bottom: 10px solid ${({ theme }) => theme.SPINNER_COLORS[4]};
  width: 100px;
  height: 100px;
  animation: loader 1s linear infinite;

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
