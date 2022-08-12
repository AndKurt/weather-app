import styled from 'styled-components/macro'
import baseBg from '@assets/img/baseBg.jpg'
import contenBg from '@assets/img/contenBg.jpg'
import { IBackgrounds } from '@interfaces/unsplash'

interface IProps {
  currentBackground: IBackgrounds
}

export const Wrapper = styled.main<IProps>`
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: ${({ theme }) => theme.SPACES[30]}px;
  background-image: url(${({ currentBackground }) => currentBackground.bg1});
  background-size: cover;
  background-position: center;
`

export const Content = styled.div<IProps>`
  position: relative;
  z-index: 10;
  max-width: ${({ theme }) => theme.WIDTH.MAX};
  width: 100%;
  height: 80%;
  padding: ${({ theme }) => theme.SPACES[60]}px;
  box-shadow: 0px 0px 33px 6px rgba(34, 60, 80, 0.6);
  background-image: url(${({ currentBackground }) => currentBackground.bg2});
  background-size: cover;
  background-position: center;
`

export const CentralContainer = styled.div`
  width: 100%;
  height: auto;
`
