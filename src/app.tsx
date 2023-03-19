import { queryClient } from '@/shared/configs/queryClient'
import { ThemeProvider } from 'styled-components'
import { QueryClientProvider } from 'react-query'

import theme from '@/view/styles/theme'
import GlobalStyle from '@/view/styles/global'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}></QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
