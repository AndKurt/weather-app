import React from 'react'
import { Provider } from 'react-redux'

import ReactDOM from 'react-dom/client'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'

import { HomePage } from '@pages/HomePage'
import { GlobalStyle } from '@styles/GlobalStyle'
import { theme } from '@styles/theme'

import { Loader } from './components'
import { persistor, store } from './store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <GlobalStyle />
          <HomePage />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
