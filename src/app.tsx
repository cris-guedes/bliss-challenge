import { ThemeProvider } from 'styled-components'

import theme from '@/view/styles/theme'
import GlobalStyle from '@/view/styles/global'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
