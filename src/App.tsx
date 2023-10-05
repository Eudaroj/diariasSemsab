import { GoogleOAuthProvider } from '@react-oauth/google'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { clientId } from './credenciais'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GoogleOAuthProvider clientId={clientId}>
          <Router />
        </GoogleOAuthProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
