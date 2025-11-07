import './App.css'
import Certifications from './components/Certifications'
import Hero from './components/Hero'
import CTAButtons from './components/CTAButtons'
import Ticker from './components/Ticker'
import YouTube from './components/YouTube'
import BodyCopy from './components/BodyCopy'
import Footer from './components/Footer'
import EmailForm from './components/EmailForm'
import ContentCards from './components/ContentCards'

function App() {

  return (
    <main>
      <Hero />
      <BodyCopy />
      <CTAButtons />
      <Ticker />
      <YouTube />
      <Certifications />
      <EmailForm />
      <ContentCards />
      <Footer />
    </main>
  )
}

export default App
