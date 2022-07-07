import { ThemeProvider } from 'styled-components'
import GlobalStyle from './Utils/globals'

import { theme } from './Utils/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    
      

    </ThemeProvider>
  )
}

export default App
