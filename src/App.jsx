import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import People from './pages/People'
import Work from './pages/Work'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/people" element={<People />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
