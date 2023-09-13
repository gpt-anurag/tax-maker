import Contact from './components/Contact'
import Header from './components/Header'
import Services from './components/Services'
import AboutSection from './components/AboutSection'

export default function Home() {
  return (
    <div className='text-white'>
      <Contact />
      <Header />
      <Services />
      <AboutSection title={`Why our consulting?`} />
    </div>
  )
}
