import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Global from './styledcomponents/GlobleStyled.js'
import { Provider } from 'react-redux'
import { store } from './reduxapp/store.js'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack'
const theme = createTheme({
  // darkMode: false,
  palette: {
    mode: "light",
    primary: {
      main: '#ff5c00',
    },
    secondary: {
      main: '#0074d9',
    },
    error: {
      main: '#fa2f21',
    },
  },

});
ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <SnackbarProvider maxSnack={5}>
      <Provider store={store}>
        <BrowserRouter>
          <Global />
          <App />
        </BrowserRouter>
      </Provider>
    </SnackbarProvider>
  </ThemeProvider>

)
