import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { store } from './Store.jsx'
import { Provider } from 'react-redux'


const client = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <QueryClientProvider client={client}>
    <App />
    </QueryClientProvider>
    </Provider>
  </StrictMode>,
)
