import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import MeetOurPeople from './components/MeetOurPeople'
import LetsTalk from './components/LetsTalk'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import StartProject from './pages/StartProject'

const Home = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <MeetOurPeople />
      <LetsTalk />
      <Footer />
    </>
  )
}

function App() {
  const { pathname } = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="bg-slate-50 min-h-screen">
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<StartProject />} />
      </Routes>
    </div>
  )
}

export default App
