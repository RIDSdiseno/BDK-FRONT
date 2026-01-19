import { BrowserRouter } from 'react-router-dom'
import { ProveedoresApp } from './providers/ProveedoresApp'
import { ScrollAlHash } from './router/ScrollAlHash'
import { RouterPrincipal } from './router/RouterPrincipal'

const App = () => {
  return (
    <ProveedoresApp>
      <BrowserRouter>
        <ScrollAlHash />
        <RouterPrincipal />
      </BrowserRouter>
    </ProveedoresApp>
  )
}

export default App
