import {Navbar} from './components/Navbar'
import {Hero} from './views/Hero'
import {Projects} from './views/Projects'
import {Skills} from './components/Skills'
import {Contact} from './views/Contact'
import {ParticlesBackground} from './components/ParticlesBackground'

function App() {
    return (
        <div className='w-full min-h-screen overflow-x-hidden bg-brand-bg text-brand-text transition-colors duration-300 selection:bg-brand-primary/30'>
            <ParticlesBackground />
            <Navbar />
            <main className='w-full overflow-x-hidden'>
                <Hero />
                <Projects />
                <Skills />
                <Contact />
            </main>
        </div>
    )
}

export default App