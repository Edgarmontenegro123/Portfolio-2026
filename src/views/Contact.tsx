import { useState, type SyntheticEvent } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { getTranslation } from '../utils/translations'
import { contactConstants, CONTACT_CHANNELS_CONFIG } from '../constants/contactData'
import { sendContactMessage } from '../services/contactService.ts'
import type { ContactFormFields } from '../types/contact'
import { FaArrowDown } from 'react-icons/fa6'

export const Contact = () => {
    const { language } = useLanguage()
    const t = getTranslation(language)
    const [form, setForm] = useState<ContactFormFields>({ name: '', email: '', message: '' })
    const [isLoading, setIsLoading] = useState(false)
    const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setStatusMessage(null)

        try {
            const response = await sendContactMessage(form)
            if (response.success) {
                setStatusMessage({
                    type: 'success',
                    text: t.contact.success
                })
                setForm({ name: '', email: '', message: '' })
            } else {
                setStatusMessage({
                    type: 'error',
                    text: t.contact.error
                })
            }
        } catch (error) {
            console.error('Contact submission error:', error);
            setStatusMessage({
                type: 'error',
                text: t.contact.error
            })
        } finally {
            setIsLoading(false)
        }
    }


    return (
        <section
            id='contact'
            className='min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-brand-bg transition-colors duration-300'
        >
            <div className='max-w-6xl mx-auto'>
                <div className='text-center md:text-left mb-12'>
                    <h2 className='text-3xl font-extrabold text-brand-text sm:text-4xl tracking-tight'>
                        {t.contact.title}
                    </h2>
                    <p className='mt-3 text-xl text-brand-secondary max-w-2xl'>
                        {t.contact.subtitle}
                    </p>
                </div>
                <div className='grid gap-12 grid-cols-1 lg:grid-cols-2 items-stretch justify-items-stretch w-full'>
                    <div className='flex flex-col w-full h-full bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-md transition-colors duration-300'>
                        <h3 className='text-lg font-bold text-brand-text mb-4'>
                            {t.contact.channelsTitle}
                        </h3>
                        <div className='flex flex-col gap-4 flex-grow justify-between'>
                            <div className='flex flex-col gap-4'>
                                {CONTACT_CHANNELS_CONFIG.map((channel, index) => {
                                    const Icon = channel.icon
                                    return (
                                        <a
                                            key={index}
                                            href={channel.href}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className={`flex items-center gap-4 p-3 rounded-xl border border-transparent bg-slate-50/50 dark:bg-slate-800/30 text-brand-text transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:shadow-md ${channel.glow} group`}
                                        >
                                            <Icon className={`w-6 h-6 ${channel.color} opacity-85 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110`} />
                                            <div>
                                                <span className='text-sm font-medium'>{channel.value}</span>
                                            </div>
                                        </a >
                                    )
                                })}
                            </div>
                            <a
                                href={contactConstants.curriculumPDF}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center justify-center gap-2 py-3 px-4 mt-4 rounded-xl font-bold text-white bg-brand-primary hover:bg-brand-primary/90 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer shadow-md text-sm'
                            >
                                <FaArrowDown className='w-4 h-4' />
                                <span>{language === 'es' ? 'Descargar Currículum en PDF' : 'Download CV as PDF'}</span>
                            </a>
                        </div>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className='flex flex-col w-full h-full gap-5 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md transition-colors duration-300'
                    >
                        <h3 className='text-lg font-bold text-brand-text'>
                            {t.contact.formTitle}
                        </h3>
                        <div className='flex flex-col gap-1.5'>
                            <label htmlFor='name' className='text-xs font-semibold text-brand-secondary'>
                                {language === 'es' ? 'Nombre Completo' : 'Full Name'}
                            </label>
                            <input
                                type='text'
                                id='name'
                                required
                                disabled={isLoading}
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                className='w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-blue-50/40 dark:bg-slate-800/50 text-brand-text placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all disabled:opacity-50 text-sm'
                                placeholder={language === 'es' ? 'Tu nombre...' : 'Your name...'}
                            />
                        </div>
                        <div className='flex flex-col gap-1.5'>
                            <label htmlFor='email' className='text-xs font-semibold text-brand-secondary'>
                                {language === 'es' ? 'Correo Electrónico' : 'Email Address'}
                            </label>
                            <input
                                type='email'
                                id='email'
                                required
                                disabled={isLoading}
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className='w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-blue-50/40 dark:bg-slate-800/50 text-brand-text placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all disabled:opacity-50 text-sm'
                                placeholder='tu@email.com'
                            />
                        </div>
                        <div className='flex flex-col gap-1.5'>
                            <label htmlFor='message' className='text-xs font-semibold text-brand-secondary'>
                                {language === 'es' ? 'Mensaje' : 'Message'}
                            </label>
                            <textarea
                                id='message'
                                rows={4}
                                required
                                disabled={isLoading}
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                className='w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-blue-50/40 dark:bg-slate-800/50 text-brand-text placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all disabled:opacity-50 resize-none text-sm'
                                placeholder={language === 'es' ? 'Escribe tu mensaje acá...' : 'Write your message here...'}
                            />
                        </div>
                        <button
                            type='submit'
                            disabled={isLoading}
                            className='w-full mt-2 py-3 px-4 rounded-xl font-bold text-white bg-brand-primary hover:bg-brand-primary/90 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm shadow-md'
                        >
                            {isLoading ? (
                                <>
                                    <svg className='animate-spin h-5 w-5 text-white' fill='none' viewBox='0 0 24 24'>
                                        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                                        <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z' />
                                    </svg>
                                    <span>{language === 'es' ? 'Enviando...' : 'Sending...'}</span>
                                </>
                            ) : (
                                <span>{language === 'es' ? 'Enviar Mensaje' : 'Send Message'}</span>
                            )}
                        </button>
                        {statusMessage && (
                            <div className={`p-3 rounded-xl text-xs font-medium text-center ${
                                statusMessage.type === 'success'
                                    ? 'bg-green-500/10 text-green-500 border border-green-500/20'
                                    : 'bg-red-500/10 text-red-500 border border-red-500/20'
                            }`}>
                                {statusMessage.text}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}