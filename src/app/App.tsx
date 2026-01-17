import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './AppRouter'
import { ScrollToHash } from './ScrollToHash'
import { Navbar } from '../components/shared/Navbar'
import { Footer } from '../components/shared/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <div className="flex min-h-screen flex-col bg-bdk-light text-slate-900">
        <Navbar />
        <main className="flex-1">
          <AppRouter />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App