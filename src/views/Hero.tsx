import { useEffect, useState } from 'react'
import {useLanguage} from '../hooks/useLanguage'
import {getTranslation} from '../utils/translations'
import profileImage from '../assets/Images/Edgar.png'

export const Hero = () => {
    const {language} = useLanguage()
    const t = getTranslation(language)

    const targetText = t.hero.role || (language === 'es' ? '<Desarrollador de Software />' : '<Software Developer />')
    const [currentText, setCurrentText] = useState('')

    useEffect(() => {
        let index = 0
        let currentString = ''

        const typewriterInterval = setInterval(() => {
            if (index < targetText.length) {
                currentString += targetText.charAt(index)
                setCurrentText(currentString)
                index++
            } else {
                clearInterval(typewriterInterval)
            }
        }, 100)

        return () => {
            clearInterval(typewriterInterval)
            setCurrentText('')
        }
    }, [targetText])

    return (
        <section
            id='about'
            className='min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-transparent transition-colors duration-300'
        >
            <div className='max-w-4xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12'>
                <div className='flex-1 space-y-6'>
                    <div className='space-y-2'>
                        <span className='text-base md:text-lg font-semibold tracking-wider uppercase text-brand-primary block animate-fade-in'>
                            {t.hero.greeting}
                        </span>
                        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-text transition-colors duration-300'>
                            Edgar Montenegro
                        </h1>
                        <div className='min-h-[40px] flex items-center justify-center md:justify-start'>
                            <p className='text-xl sm:text-2xl font-bold text-brand-secondary transition-colors duration-300 inline-block pr-1
                                          animate-cursor-blink whitespace-nowrap font-mono'>
                                {currentText}
                            </p>
                        </div>
                    </div>
                    <p className='text-base sm:text-lg text-brand-text max-w-2xl leading-relaxed transition-colors duration-300'>
                        {t.hero.description}
                    </p>
                    <div className='flex flex-wrap gap-4 justify-center md:justify-start pt-2'>
                        <button
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            className='px-6 py-3 text-sm font-semibold rounded-lg bg-brand-primary text-white hover:bg-brand-primary/90
                                       shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer'
                        >
                            {language === 'es' ? 'Ver Proyectos' : 'View Projects'}
                        </button>
                        <button
                            onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                            className='px-6 py-3 text-sm font-semibold rounded-lg border border-brand-text/20 text-brand-text hover:bg-brand-text/10
                                       hover:-translate-y-0.5 transition-all duration-200 cursor-pointer'
                        >
                            {language === 'es' ? 'Tecnologías' : 'Skills'}
                        </button>
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className='px-6 py-3 text-sm font-semibold rounded-lg border border-brand-text/20 text-brand-text hover:bg-brand-text/5
                                       hover:-translate-y-0.5 transition-all duration-200 cursor-pointer'
                        >
                            {t.nav.contact}
                        </button>
                    </div>
                </div>
                <div className='flex-shrink-0 relative group animate-fade-in-delayed'>
                    <div className='absolute -inset-1 rounded-full bg-brand-primary/20 blur-md opacity-50 group-hover:opacity-75 transition duration-500'></div>
                    <div className='relative w-48 h-48 sm:w-56 sm:h-56 rounded-full p-[2px] overflow-hidden flex items-center justify-center shadow-lg
                                  bg-slate-200 dark:bg-slate-800'>
                        <div
                            className='absolute inset-[-50%] animate-border-spin'
                            style={{
                                background: 'conic-gradient(from 0deg, transparent 0%, #3b82f6 20%, #8b5cf6 50%, #ec4899 80%, transparent 100%)'
                            }}
                        />
                        <div className='relative w-full h-full rounded-full bg-brand-bg flex items-center justify-center overflow-hidden'>
                            <img
                                src={profileImage}
                                alt="Edgar Montenegro"
                                className='w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-500 ease-in-out'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}