import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Home } from './pages/Home'
import { QueryClient, QueryClientProvider } from 'react-query'



export function App() {
  const queryClient = new QueryClient()
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <Home />
        <GlobalStyle />
      </QueryClientProvider >
    </ThemeProvider>
  )
}