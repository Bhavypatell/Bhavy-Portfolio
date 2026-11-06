import { MotionConfig } from 'framer-motion'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Achievements from './components/Achievements'
import Certifications from './components/Certifications'
import BeyondCode from './components/BeyondCode'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Background />
      <Navbar />
      <main>
        <Hero /><About /><Skills /><Projects /><Timeline /><Achievements /><Certifications /><BeyondCode /><Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
