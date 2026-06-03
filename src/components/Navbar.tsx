import { useState } from 'react'
import { useTheme } from '../hooks/useTheme'
import { useLanguage } from '../hooks/useLanguage'
import { getTranslation } from '../utils/translations'

export const Navbar = () => {
    const { theme, toggleTheme } = useTheme()
    const { language, setLanguage } = useLanguage()
    const t = getTranslation(language)

    // Estado para controlar el menú desplegable en dispositivos móviles
    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        { label: t.nav.about, href: '#about' },
        { label: t.nav.projects, href: '#projects' },
        { label: t.nav.contact, href: '#contact' }
    ]

    const handleScroll = (href: string) => {
        const targetId = href.replace('#', '')
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
    }

    return (
        <nav className='fixed top-0 left-0 w-full z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-text/10 transition-colors duration-300'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex-shrink-0 font-bold text-xl tracking-tight text-brand-primary'>
                        <button
                            onClick={() => {
                                window.scrollTo({ top: 0, behavior: 'smooth' })
                                setIsOpen(false)
                            }}
                            className='flex-shrink-0 font-bold text-xl tracking-tight text-brand-primary hover:text-brand-text/60 transform hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out cursor-pointer font-mono'
                            aria-label='Ir al inicio'
                        >
                            {'<EM.dev/>'}
                        </button>
                    </div>
                    <div className='hidden md:flex items-center space-x-8'>
                        {navItems.map((item) => (
                            <button
                                key={item.href}
                                onClick={() => {
                                    const targetId = item.href.replace('#', '')
                                    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
                                    if (setIsOpen) setIsOpen(false) // Si es el menú móvil, lo cierra
                                }}
                                className='whitespace-nowrap text-brand-text/80 hover:text-brand-primary font-medium transition-colors duration-200 cursor-pointer text-left block w-full md:inline'
                            >
                                {item.label}
                            </button>
                        ))}
                        <div className='flex items-center space-x-4 border-l border-brand-text/20 pl-4'>
                            <button
                                onClick={() => setLanguage(language === 'es' ? 'en-GB' : 'es')}
                                className='px-3 py-2 text-xs font-bold rounded border border-brand-text/10 text-brand-text/80 hover:border-brand-primary hover:text-brand-primary transition-all duration-200 cursor-pointer'
                                title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
                            >
                                {language === 'es' ? 'ENG' : 'ESP'}
                            </button>
                            <button
                                onClick={toggleTheme}
                                className='p-2 rounded-full text-brand-text/80 hover:text-brand-primary hover:bg-brand-text/5 transition-all duration-200 cursor-pointer'
                                aria-label='Toggle theme'
                            >
                                {theme === 'dark' ? (
                                    <svg className='w-7 h-7' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                                              d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.001 0z' />
                                    </svg>
                                ) : (
                                    <svg className='w-7 h-7' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                                              d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z' />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    <div className='md:hidden flex items-center space-x-3'>
                        <button onClick={toggleTheme} className='p-2 text-brand-text/80'>
                            {theme === 'dark' ? (
                                <svg className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                                          d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.001 0z' />
                                </svg>
                            ) : (
                                <svg className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                                          d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z' />
                                </svg>
                            )}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='p-2 rounded-md text-brand-text hover:text-brand-primary focus:outline-none'
                            aria-label='Toggle menu'
                        >
                            {isOpen ? (
                                <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                                </svg>
                            ) : (
                                <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className='px-2 pt-2 pb-4 space-y-1 bg-brand-bg border-t border-brand-text/10 shadow-lg'>
                    {navItems.map((item) => (
                        <button
                            key={item.href}
                            onClick={() => handleScroll(item.href)}
                            className='block w-full text-left px-3 py-2 rounded-md text-base font-medium text-brand-text/80 hover:text-brand-primary hover:bg-brand-text/5 cursor-pointer'
                        >
                            {item.label}
                        </button>
                    ))}
                    <div className='pt-2 border-t border-brand-text/10 flex items-center justify-between px-3'>
                        <span className='text-sm text-brand-text/60 font-medium'>Language / Idioma:</span>
                        <button
                            onClick={() => {
                                setLanguage(language === 'es' ? 'en-GB' : 'es')
                                setIsOpen(false)
                            }}
                            className='px-3 py-1 font-bold rounded border border-brand-text/30 text-sm'
                        >
                            {language === 'es' ? '🇬🇧 English' : '🇪🇸 Español'}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}