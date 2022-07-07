import { ThemeProvider } from 'styled-components'
import Header from './Components/Header'
import HomePage from './Pages/Home'
import GlobalStyle from './Utils/globals'

import { theme } from './Utils/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    
      <Header />
      <HomePage />
    </ThemeProvider>
  )
}

export default App
