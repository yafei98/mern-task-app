import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
// import { system } from "@chakra-ui/react/preset";
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider >
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>,
)
