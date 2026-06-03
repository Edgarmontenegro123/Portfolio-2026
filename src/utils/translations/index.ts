import { es } from './es'
import { en } from './en'
import type { Language } from '../../context/LanguageContext'

export const translations = {
    es,
    'en-GB': en
}

export const getTranslation = (lang: Language) => {
    return translations[lang] || translations['en-GB']
}