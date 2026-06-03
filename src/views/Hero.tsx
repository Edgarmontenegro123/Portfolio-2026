import {useLanguage} from '../hooks/useLanguage'
import {getTranslation} from '../utils/translations'

export const Hero = () => {
    const {language} = useLanguage()
    const t = getTranslation(language)

    return (
        <section
            id='about'
            className='min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-brand-bg transition-colors duration-300'
        >
            <div
                className='max-w-4xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12'>
                <div className='flex-1 space-y-6'>
                    <div className='space-y-2'>
            <span
                className='text-sm md:text-base font-semibold tracking-wider uppercase text-brand-primary block animate-fade-in'>
              {t.hero.greeting}
            </span>
                        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-text transition-colors duration-300'>
                            Edgar Montenegro
                        </h1>
                        <p className='text-xl sm:text-2xl font-bold text-brand-secondary transition-colors duration-300'>
                            {t.hero.role}
                        </p>
                    </div>
                    <p className='text-base sm:text-lg text-brand-text/80 max-w-2xl leading-relaxed transition-colors duration-300'>
                        {t.hero.description}
                    </p>
                    <div className='flex flex-wrap gap-4 justify-center md:justify-start pt-2'>
                        <button
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            className='px-6 py-3 text-sm font-semibold rounded-lg bg-brand-primary text-white hover:bg-brand-primary/90 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer'
                        >
                            {language === 'es' ? 'Ver Proyectos' : 'View Projects'}
                        </button>
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className='px-6 py-3 text-sm font-semibold rounded-lg border border-brand-text/20 text-brand-text hover:bg-brand-text/5 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer'
                        >
                            {t.nav.contact}
                        </button>
                    </div>
                </div>
                <div className='flex-shrink-0 relative group animate-fade-in-delayed'>
                    <div
                        className='absolute -inset-1 rounded-full bg-gradient-to-r from-brand-primary to-purple-600 blur opacity-30 group-hover:opacity-50 transition duration-300'></div>
                    <div
                        className='relative w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-brand-text/5 border-2 border-brand-primary/20 flex items-center justify-center overflow-hidden shadow-inner bg-linear-to-b from-brand-primary/10 to-transparent'>
                        <span className='text-5xl font-black text-brand-primary tracking-tighter select-none'>
              &lt;EM /&gt;
            </span>
                    </div>
                </div>
            </div>
        </section>
    )
}