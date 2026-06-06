import { Navbar } from './components/Navbar'
import { Hero } from './views/Hero'
import { Projects } from './views/Projects'
import { Contact } from './views/Contact'
import { ParticlesBackground } from './components/ParticlesBackground'

function App() {
  return (
      <div className='min-h-screen bg-brand-bg text-brand-text transition-colors duration-300 selection:bg-brand-primary/30'>
          <ParticlesBackground />
          <Navbar />
          <main>
              <Hero />
              <Projects />
              <Contact />
          </main>
      </div>
  )
}

export default App