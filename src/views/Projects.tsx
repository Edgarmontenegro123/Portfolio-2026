import {useState} from 'react'
import {useLanguage} from '../hooks/useLanguage'
import {getTranslation} from '../utils/translations'
import {projectsMockUp} from '../constants/projectsData'
import {FaGithub, FaArrowUpRightFromSquare, FaChevronLeft, FaChevronRight, FaPlay} from 'react-icons/fa6'

export const Projects = () => {
    const {language} = useLanguage()
    const t = getTranslation(language)
    const [currentIndex, setCurrentIndex] = useState(0)

    const [touchStartX, setTouchStartX] = useState<number | null>(null)

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsMockUp.length)
    }

    const prevProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projectsMockUp.length) % projectsMockUp.length)
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStartX(e.touches[0].clientX)
    }

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX === null) return

        const touchEndX = e.changedTouches[0].clientX
        const diffX = touchStartX - touchEndX // Distancia recorrida

        // El umbral de 50px es para asegurarse de que fue un swipe intencional y no un tap casual
        if (diffX > 50) {
            nextProject() // Deslizó a la izquierda -> Siguiente
        } else if (diffX < -50) {
            prevProject() // Deslizó a la derecha -> Anterior
        }

        setTouchStartX(null) // Reseteamos el estado
    }

    const currentProject = projectsMockUp[currentIndex]

    const techBadges = currentProject.tech.split(',').map(t => t.trim())

    return (
        <section
            id='projects'
            className='relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-transparent transition-colors duration-300 overflow-hidden'>
            <div className='max-w-5xl mx-auto'>
                <div className='text-center md:text-left mb-12'>
                    <h2 className='text-3xl font-extrabold text-brand-text sm:text-4xl tracking-tight'>
                        {t.projects.title}
                    </h2>
                    <p className='mt-3 text-xl text-brand-secondary max-w-2xl'>
                        {t.projects.subtitle}
                    </p>
                </div>
                <div className='relative flex items-center justify-center w-full min-h-[500px]'>
                    <button
                        onClick={prevProject}
                        className='absolute -left-6 md:-left-16 z-20 p-3 rounded-full border border-slate-100 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-brand-text hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-md transform-gpu hover:scale-110 cursor-pointer'
                        aria-label='Previous project'
                    >
                        <FaChevronLeft className='w-5 h-5'/>
                    </button>
                    <div
                        key={currentProject.id}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        className='grid grid-cols-1 md:grid-cols-12 w-full bg-white/60 dark:bg-slate-950/60 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-xl overflow-hidden min-h-[460px] animate-fade-in-up backdrop-blur-sm cursor-grab active:cursor-grabbing'
                    >
                        <div
                            className='relative md:col-span-6 bg-white dark:bg-slate-900 flex items-center justify-center overflow-hidden min-h-[260px] md:min-h-full group p-8 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800 transition-colors duration-300'>
                            <img
                                src={currentProject.img}
                                alt={currentProject.title}
                                className='max-w-full max-h-full object-contain rounded-xl shadow-md transition-transform duration-700 group-hover:scale-102 pointer-events-none'
                            />
                            <div
                                className='absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none'/>
                            <div
                                className='absolute top-4 left-4 flex items-center gap-3 bg-white/90 dark:bg-slate-900/90 p-2 rounded-xl border border-brand-text/5 shadow-md backdrop-blur-sm'>
                                <img
                                    src={currentProject.avatar}
                                    alt='Project Logo'
                                    className='w-8 h-8 object-contain rounded-md'
                                />
                                <span className='text-xs font-bold text-brand-text pr-1'>
                                    {language === 'es' ? currentProject.date.es : currentProject.date['en-GB']}
                                </span>
                            </div>
                        </div>
                        <div
                            className='md:col-span-6 p-6 sm:p-8 flex flex-col justify-between h-full bg-white/40 dark:bg-slate-950/40'>
                            <div className='flex flex-col space-y-6'>
                                <h3 className='text-2xl font-bold text-brand-text tracking-tight'>
                                    {currentProject.title}
                                </h3>
                                <p className='mt-1 text-sm sm:text-base text-brand-secondary leading-relaxed'>
                                    {language === 'es' ? currentProject.description.es : currentProject.description['en-GB']}
                                </p>
                            </div>
                            <div className='mt-6 space-y-4'>
                                <div className='flex flex-wrap gap-2'>
                                    {techBadges.map((badge, idx) => (
                                        <span
                                            key={idx}
                                            className='text-sm font-semibold px-3.5 py-1.5 rounded-md bg-blue-500/5 text-brand-primary border border-brand-primary/20 transition-colors dark:bg-brand-primary/10 dark:text-blue-400 dark:border-brand-primary/30 shadow-sm'
                                        >
                                            {badge}
                                        </span>
                                    ))}
                                </div>
                                <hr className='border-slate-100 dark:border-slate-800/60'/>
                                <div className='grid grid-cols-3 gap-2 sm:gap-4 pt-2'>
                                    <a
                                        href={currentProject.gitHub}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl font-bold text-brand-text bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all duration-200 transform-gpu hover:-translate-y-0.5 text-xs sm:text-sm shadow-sm'
                                    >
                                        <FaGithub className='w-4 h-4'/>
                                        <span>{language === 'es' ? 'Código' : 'Code'}</span>
                                    </a>
                                    <a
                                        href={currentProject.video}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl font-bold text-brand-text bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all duration-200 transform-gpu hover:-translate-y-0.5 text-xs sm:text-sm shadow-sm'
                                    >
                                        <FaPlay className='w-3 h-3 text-brand-primary'/>
                                        <span>Video</span>
                                    </a>
                                    <a
                                        href={currentProject.deploy}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl font-bold text-white bg-brand-primary hover:bg-brand-primary/90 transition-all duration-200 transform-gpu hover:-translate-y-0.5 text-xs sm:text-sm shadow-md'
                                    >
                                        <FaArrowUpRightFromSquare className='w-3.5 h-3.5'/>
                                        <span>Demo</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={nextProject}
                        className='absolute -right-6 md:-right-16 z-20 p-3 rounded-full border border-slate-100 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-brand-text hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-md transform-gpu hover:scale-110 cursor-pointer'
                        aria-label='Next project'
                    >
                        <FaChevronRight className='w-5 h-5'/>
                    </button>
                </div>
                <div className='flex justify-center gap-2 mt-8'>
                    {projectsMockUp.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                                index === currentIndex ? 'w-8 bg-brand-primary' : 'w-2.5 bg-slate-300 dark:bg-slate-700'
                            }`}
                            aria-label={`Go to project ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}