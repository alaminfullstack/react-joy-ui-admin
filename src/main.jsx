import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/inter';
import { StyledEngineProvider } from '@mui/joy/styles';
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </React.StrictMode>,
)
