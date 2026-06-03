import { useLanguage } from '../hooks/useLanguage'
import { getTranslation } from '../utils/translations'
import type { Project } from '../types/project'

export const Projects = () => {
    const { language } = useLanguage()
    const t = getTranslation(language)

    const projectsData: Project[] = [
        {
            title: 'Basket Stats Dashboard',
            description: {
                es: 'Panel de control interactivo para el seguimiento de estadísticas de baloncesto, conectado a microservicios eficientes.',
                'en-GB': 'Interactive control panel for tracking basketball statistics, connected to efficient microservices.'
            },
            tags: ['React', 'TypeScript', 'Tailwind', 'Vercel'],
            githubUrl: 'https://github.com',
            liveUrl: 'https://vercel.app',
            isFeatured: true
        },
        {
            title: 'Basket Stats Management API',
            description: {
                es: 'Servicio backend robusto desarrollado en Go enfocado en la gestión, persistencia y lógica de negocio del sistema.',
                'en-GB': 'Robust backend service developed in Go focused on system management, persistence, and business logic.'
            },
            tags: ['Go', 'Microservices', 'REST API'],
            githubUrl: 'https://github.com',
            isFeatured: false
        },
        {
            title: 'Basket Stats Analytics API',
            description: {
                es: 'Servicio independiente en Go diseñado para el procesamiento de datos complejos y métricas de rendimiento deportivo.',
                'en-GB': 'Independent Go service designed for processing complex data and sports performance metrics.'
            },
            tags: ['Go', 'Analytics', 'Performance'],
            githubUrl: 'https://github.com',
            isFeatured: false
        }
    ]

    return (
        <section
            id='projects'
            className='min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-brand-bg transition-colors duration-300'
        >
            <div className='max-w-6xl mx-auto'>
                <div className='text-center md:text-left mb-12'>
                    <h2 className='text-3xl font-extrabold text-brand-text sm:text-4xl tracking-tight'>
                        {t.projects.title}
                    </h2>
                    <p className='mt-3 text-xl text-brand-secondary max-w-2xl'>
                        {t.projects.subtitle}
                    </p>
                </div>
                <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                    {projectsData.map((project, index) => (
                        <article
                            key={index}
                            className={`flex flex-col justify-between p-6 rounded-2xl bg-brand-bg border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                                project.isFeatured
                                    ? 'border-brand-primary/40 shadow-md shadow-brand-primary/5 ring-1 ring-brand-primary/10'
                                    : 'border-brand-text/10 hover:border-brand-text/20'
                            }`}
                        >
                            <div>
                                {project.isFeatured && (
                                    <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-primary/10 text-brand-primary mb-4'>
                    {language === 'es' ? 'Destacado' : 'Featured'}
                  </span>
                                )}
                                <h3 className='text-xl font-bold text-brand-text tracking-tight mb-2'>
                                    {project.title}
                                </h3>
                                <p className='text-sm text-brand-secondary leading-relaxed mb-6'>
                                    {project.description[language as 'es' | 'en-GB']}
                                </p>
                            </div>
                            <div>
                                <div className='flex flex-wrap gap-2 mb-6'>
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className='px-2.5 py-1 text-xs font-medium rounded-md bg-brand-text/5 text-brand-text/70'
                                        >
                      {tag}
                    </span>
                                    ))}
                                </div>
                                <div className='flex items-center gap-4 pt-4 border-t border-brand-text/5 text-sm font-medium'>
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='inline-flex items-center text-brand-text/70 hover:text-brand-primary transition-colors duration-200'
                                        >
                                            Code →
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='inline-flex items-center text-brand-primary hover:text-brand-primary/80 transition-colors duration-200'
                                        >
                                            Live Demo ↗
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}