import { useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { LanguageContext } from './LanguageContextInstance'
import type { Language } from './LanguageContextInstance'

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>(() => {
        const savedLang = localStorage.getItem('portfolio-lang')
        if (savedLang === 'es' || savedLang === 'en-GB') return savedLang
        const browserLang = navigator.language
        return browserLang.startsWith('es') ? 'es' : 'en-GB'
    })

    useEffect(() => {
        localStorage.setItem('portfolio-lang', language)
        document.documentElement.lang = language
    }, [language])

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}