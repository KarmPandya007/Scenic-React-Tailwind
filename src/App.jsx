import Navbar from './components/Navbar'
import Intro from './components/Intro'
import MeetOurPeople from './components/MeetOurPeople'
import LetsTalk from './components/LetsTalk'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <CustomCursor />
      <Navbar />
      <Intro />
      <MeetOurPeople />
      <LetsTalk />
      <Footer />
    </div>
  )
}

export default App
