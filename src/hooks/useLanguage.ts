import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import type { LanguageContextType } from '../context/LanguageContext'

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext)

    // Validamos que el hook se esté usando dentro del Provider correcto
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }

    return context
}