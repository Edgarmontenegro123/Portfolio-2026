import { useLanguage } from '../hooks/useLanguage'
import { getTranslation } from '../utils/translations'

export const Contact = () => {
    const { language } = useLanguage()
    const t = getTranslation(language)

    return (
        <section
            id='contact'
            className='min-h-screen pt-24 px-4 sm:px-6 lg:px-8 bg-brand-bg transition-colors duration-300'
        >
            <div className='max-w-4xl mx-auto text-center md:text-left'>
                <h2 className='text-3xl font-extrabold text-brand-text sm:text-4xl'>
                    {t.contact.title}
                </h2>
                <p className='mt-3 text-xl text-brand-secondary'>
                    {t.contact.subtitle}
                </p>
                <div className='mt-12 py-12 border-2 border-dashed border-brand-text/10 rounded-xl flex items-center justify-center text-brand-text/40'>
                    {language === 'es' ? 'Sección contacto en construcción...' : 'Contact section under construction...'}
                </div>
            </div>
        </section>
    )
}