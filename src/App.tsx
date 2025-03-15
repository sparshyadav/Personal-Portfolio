import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PortfolioPage from './pages/PortfolioPage'
import ContactForm from './components/Contact/ContactForm'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<PortfolioPage />} />
        <Route path='/contact' element={<ContactForm />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
