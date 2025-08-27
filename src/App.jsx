import './App.css'
import Certifications from './components/Certifications'
import Hero from './components/Hero'
import CTAButtons from './components/CTAButtons'
import TrustedBy from './components/TrustedBy'
import YouTube from './components/YouTube'
import BodyCopy from './components/BodyCopy'

function App() {

  return (
    <main>
      <Hero />
      <BodyCopy />
      <CTAButtons />
      <Certifications />
      <TrustedBy />
      <YouTube />
    </main>
  )
}

export default App
