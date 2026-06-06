import { useLanguage } from '../hooks/useLanguage'
import { getTranslation } from '../utils/translations'
import { ProjectCard } from '../components/ProjectCard'
import { projectsMockUp } from '../constants/projectsData'

export const Projects = () => {
    const { language } = useLanguage()
    const t = getTranslation(language)

    return (
        <section
            id='projects'
            className='relative z-10 min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-brand-bg transition-colors duration-300'
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
                    {projectsMockUp.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}