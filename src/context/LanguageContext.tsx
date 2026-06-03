import { createContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'

export type Language = 'es' | 'en-GB'

export interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>(() => {
        const savedLang = localStorage.getItem('portfolio-lang')
        if (savedLang === 'es' || savedLang === 'en-GB') return savedLang

        // Si no hay registro, revisamos el idioma del navegador del usuario
        const browserLang = navigator.language
        return browserLang.startsWith('es') ? 'es' : 'en-GB'
    });

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