import { useState, type SyntheticEvent } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { getTranslation } from '../utils/translations'
import { contactConstants } from '../constants/contactData'
import { sendContactMessage } from '../services/contactService.ts'
import type { ContactFormFields } from '../types/contact'

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
                            <a
                                href={contactConstants.whatsapp}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-4 p-3 rounded-xl hover:bg-blue-50/50 dark:hover:bg-slate-800 text-brand-text transition-colors duration-200'
                            >
                                <svg className='w-6 h-6 text-green-500 animate-pulse flex-shrink-0' viewBox='0 0 24 24' fill='currentColor'>
                                    <path d='M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.488 1.451 5.42 1.453 5.432 0 9.85-4.416 9.853-9.848.002-2.63-1.023-5.101-2.885-6.963C17.166 1.837 14.693.81 12.013.81c-5.433 0-9.85 4.416-9.854 9.848-.001 1.838.48 3.63 1.392 5.204l-.993 3.628 3.71-.973zm11.567-7.462c-.315-.158-1.86-.918-2.142-1.02-.283-.103-.488-.153-.69.153-.204.307-.779 1.02-.956 1.226-.178.205-.355.231-.67.074-1.92-.956-3.153-1.854-4.443-4.08-.342-.587.342-.546.98-1.812.106-.214.053-.402-.026-.56-.078-.159-.69-1.66-.944-2.27-.249-.597-.501-.517-.69-.527l-.587-.01c-.204 0-.536.077-.816.383-.28.307-1.071 1.047-1.071 2.554 0 1.507 1.097 2.965 1.244 3.162.147.197 2.158 3.297 5.228 4.623.73.315 1.3.504 1.743.645.734.233 1.404.2 1.932.121.588-.088 1.86-.76 2.122-1.456.264-.696.264-1.293.186-1.413-.079-.12-.283-.178-.598-.336z'/>
                                </svg>
                                <div>
                                    <span className='block text-xs text-brand-secondary'>{language === 'es' ? 'Teléfono' : 'Phone'}</span>
                                    <span className='text-sm font-medium'>{contactConstants.phone}</span>
                                </div>
                            </a >
                            <a
                                href={contactConstants.linkedIn}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-4 p-3 rounded-xl hover:bg-blue-50/50 dark:hover:bg-slate-800 text-brand-text transition-colors duration-200'
                            >
                                <svg className='w-6 h-6 text-blue-600 flex-shrink-0' viewBox='0 0 24 24' fill='currentColor'>
                                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'/>
                                </svg>
                                <div>
                                    <span className='block text-xs text-brand-secondary'>LinkedIn</span>
                                    <span className='text-sm font-medium'>{contactConstants.perfilLinkedIn}</span>
                                </div>
                            </a>
                            <a
                                href={contactConstants.github}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-4 p-3 rounded-xl hover:bg-blue-50/50 dark:hover:bg-slate-800 text-brand-text transition-colors duration-200'
                            >
                                <svg className='w-6 h-6 text-slate-800 dark:text-slate-200 flex-shrink-0' viewBox='0 0 24 24' fill='currentColor'>
                                    <path fillRule='evenodd' clipRule='evenodd' d='M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.27.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z' />
                                </svg>
                                <div>
                                    <span className='block text-xs text-brand-secondary'>GitHub</span>
                                    <span className='text-sm font-medium'>{contactConstants.perfilGithub}</span>
                                </div>
                            </a>
                            <a
                                href={contactConstants.twitter}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-4 p-3 rounded-xl hover:bg-blue-50/50 dark:hover:bg-slate-800 text-brand-text transition-colors duration-200'
                            >
                                <svg className='w-5 h-5 mx-0.5 text-slate-800 dark:text-slate-200 flex-shrink-0' viewBox='0 0 24 24' fill='currentColor'>
                                    <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'/>
                                </svg>
                                <div>
                                    <span className='block text-xs text-brand-secondary'>X (Twitter)</span>
                                    <span className='text-sm font-medium'>@{contactConstants.perfilTwitter}</span>
                                </div>
                            </a>
                            <a
                                href={contactConstants.curriculumPDF}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center justify-center gap-2 py-3 px-4 mt-2 rounded-xl font-bold text-white bg-brand-primary hover:bg-brand-primary/90 transition-all cursor-pointer shadow-md text-sm'
                            >
                                <svg className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2.5}>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                                </svg>
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