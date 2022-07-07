import { ThemeProvider } from 'styled-components'
import HomePage from './Pages/Home'
import GlobalStyle from './Utils/globals'

import { theme } from './Utils/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    
      <HomePage />
    </ThemeProvider>
  )
}

export default App
