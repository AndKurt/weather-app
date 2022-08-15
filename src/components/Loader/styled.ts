import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1000000;
`

export const Spinner = styled.div`
  animation: loader 1s linear infinite;
  border: 10px solid ${({ theme }) => theme.SPINNER_COLORS[1]};
  border-bottom: 10px solid ${({ theme }) => theme.SPINNER_COLORS[4]};
  border-radius: 50%;
  border-right: 10px solid ${({ theme }) => theme.SPINNER_COLORS[3]};
  border-top: 10px solid ${({ theme }) => theme.SPINNER_COLORS[2]};
  display: inline-block;
  height: 100px;
  width: 100px;

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
