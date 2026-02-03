import Navbar from './components/Navbar'
import Intro from './components/Intro'
import MeetOurPeople from './components/MeetOurPeople'
import LetsTalk from './components/LetsTalk'
import Footer from './components/Footer'

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
