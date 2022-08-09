import { HomePage } from '@pages/HomePage'
import { GlobalStyle } from '@styles/GlobalStyle'
import { theme } from '@styles/theme'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  </React.StrictMode>
)
