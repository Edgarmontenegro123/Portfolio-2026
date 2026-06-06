import {useState} from 'react'
import {useLanguage} from '../hooks/useLanguage'
import {getTranslation} from '../utils/translations'
import type {Project} from '../types/project'

interface ProjectCardProps {
    project: Project
}

export const ProjectCard = ({project}: ProjectCardProps) => {
    const {language} = useLanguage()
    const t = getTranslation(language)
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <div
            className='relative z-10 isolate transform-gpu will-change-transform flex flex-col rounded-2xl bg-brand-bg border border-brand-text/10 shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'>
            <div className='flex items-center gap-4 p-4 border-b border-brand-text/5'>
                <img
                    src={project.avatar}
                    alt={`${project.title} logo`}
                    className='w-12 h-12 rounded-xl object-contain bg-brand-text/5 p-1'
                />
                <div className='flex flex-col'>
                    <span className='font-bold text-brand-text tracking-tight'>{project.title}</span>
                    <span className='text-xs text-brand-secondary'>{project.date[language]}</span>
                </div>
            </div>
            <div className='relative aspect-video bg-black/5 overflow-hidden border-b border-brand-text/5'>
                <img
                    src={project.img}
                    alt={`${project.title} preview`}
                    className='w-full h-full object-cover'
                />
            </div>
            <div className='flex flex-col w-full'>
                <div
                    className='flex items-center justify-between px-4 py-3 bg-brand-text/5 border-b border-brand-text/5'>
                    <a
                        href={project.video}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary text-white hover:bg-brand-primary/90 transition-colors duration-200 shadow-sm'
                        title='Ver video promocional'
                    >
                        <svg className='w-4 h-4 fill-current ml-0.5' viewBox='0 0 24 24'>
                            <path d='M8 5v14l11-7z'/>
                        </svg>
                    </a>
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className='p-2 text-brand-secondary hover:text-brand-primary transition-colors duration-200 cursor-pointer'
                        aria-label={isExpanded ? 'Colapsar detalles' : 'Expandir detalles'}
                    >
                        {isExpanded ? (
                            <svg className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'
                                 strokeWidth={2.5}>
                                <path strokeLinecap='round' strokeLinejoin='round' d='M5 15l7-7 7 7'/>
                            </svg>
                        ) : (
                            <svg className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'
                                 strokeWidth={2.5}>
                                <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7'/>
                            </svg>
                        )}
                    </button>
                </div>
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isExpanded ? 'max-h-[500px] opacity-100 p-4 border-b border-brand-text/5' : 'max-h-0 opacity-0'
                }`}>
                    <p className='text-sm text-brand-secondary leading-relaxed mb-4'>
                        {project.description[language]}
                    </p>
                    <div className='flex flex-col gap-1 mb-4 text-xs bg-brand-text/5 p-3 rounded-xl'>
                        <span className='text-brand-secondary'>
                            {t.projects.technologiesUsed}
                        </span>
                        <span className='font-bold text-brand-text'>
                            {project.tech}
                        </span>
                    </div>
                    <div className='flex flex-wrap items-center justify-between gap-2 pt-2 text-xs font-semibold'>
                        <span className='text-brand-secondary'>
                            <a href={project.deploy} target='_blank' rel='noopener noreferrer'
                               className='text-brand-primary hover:underline'>
                                {t.projects.liveDemo}
                            </a>
                        </span>
                        <span className='text-brand-secondary'>
                            <a href={project.gitHub} target='_blank' rel='noopener noreferrer'
                               className='text-brand-primary hover:underline'>
                                {t.projects.viewCode}
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}