import styled from 'styled-components/macro'

import { IBackgrounds } from '@interfaces/unsplash'

interface IProps {
  currentBackground?: IBackgrounds
}

export const Wrapper = styled.main<IProps>`
  align-items: center;
  background-image: url(${({ currentBackground }) => currentBackground?.bg1});
  background-position: center;
  background-size: cover;
  display: flex;
  height: 100vh;
  justify-content: center;
  padding: ${({ theme }) => theme.SPACES[30]}px;
  position: fixed;
  width: 100vw;
  z-index: 1;
`

export const Content = styled.div<IProps>`
  background-image: url(${({ currentBackground }) => currentBackground?.bg2});
  background-position: center;
  background-size: cover;
  box-shadow: 0px 0px 33px 6px rgba(34, 60, 80, 0.6);
  height: 80%;
  max-width: ${({ theme }) => theme.WIDTH.MAX};
  padding: ${({ theme }) => theme.SPACES[60]}px;
  position: relative;
  width: 100%;
  z-index: 10;

  @media ${({ theme }) => theme.DEVICE.tablet} {
    padding: ${({ theme }) => theme.SPACES[30]}px;
  }
  @media ${({ theme }) => theme.DEVICE.mobileL} {
    padding: ${({ theme }) => theme.SPACES[15]}px;
  }
`

export const CentralContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 100%;

  @media ${({ theme }) => theme.DEVICE.tablet} {
    height: 60%;
  }
`

export const CentralHelper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media ${({ theme }) => theme.DEVICE.tablet} {
    align-items: center;
    flex-direction: column;
  }
`
