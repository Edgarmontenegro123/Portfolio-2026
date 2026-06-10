import { createContext } from 'react'

export type Language = 'es' | 'en-GB'

export interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)