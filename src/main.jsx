import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SearchBarProvider } from './context/SearchBarContext.jsx'
import { TotalPokemonsProvider } from './context/TotalPokemonsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TotalPokemonsProvider>
      <SearchBarProvider>
        <App />
      </SearchBarProvider>
    </TotalPokemonsProvider>
  </StrictMode>,
)
