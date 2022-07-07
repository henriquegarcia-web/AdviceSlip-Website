import HomePage from './Pages/Home'
import GlobalStyle from './Utils/globals'

import { ApplicationProvider } from './Contexts/ApplicationContext'

function App() {
  return (
    <ApplicationProvider>
      <GlobalStyle />
    
      <HomePage />
    </ApplicationProvider>
  )
}

export default App
