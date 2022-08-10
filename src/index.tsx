import { HomePage } from '@pages/HomePage'
import { GlobalStyle } from '@styles/GlobalStyle'
import { theme } from '@styles/theme'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'
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
  </React.StrictMode>
)
