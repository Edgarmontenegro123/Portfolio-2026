import { useLanguage } from '../hooks/useLanguage'
import { SKILL_CATEGORIES_CONFIG } from '../constants/skillsData'

export const Skills = () => {
    const { language } = useLanguage()

    return (
        <section id='skills' className='relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-brand-bg/40 transition-colors duration-300'>
            <div className='max-w-6xl mx-auto'>
                <div className='text-center md:text-left mb-16'>
                    <h2 className='text-3xl font-extrabold text-brand-text sm:text-4xl tracking-tight'>
                        {language === 'es' ? 'Tecnologías y Herramientas' : 'Skills & Technologies'}
                    </h2>
                    <p className='mt-3 text-xl text-brand-secondary max-w-2xl'>
                        {language === 'es'
                            ? 'Mi stack técnico actualizado para el diseño y desarrollo de software.'
                            : 'My updated technical stack for software design and development.'}
                    </p>
                </div>

                <div className='space-y-12'>
                    {SKILL_CATEGORIES_CONFIG.map((category, index) => (
                        <div key={index} className='space-y-4'>
                            <h3 className='font-bold text-brand-secondary tracking-wide uppercase text-sm'>
                                {language === 'es' ? category.titleEs : category.titleEn}
                            </h3>

                            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                                {category.skills.map((skill, idx) => {
                                    const Icon = skill.icon

                                    return (
                                        <div
                                            key={idx}
                                            className={`group flex items-center gap-4 p-4 rounded-xl bg-brand-bg border border-brand-text/10 transition-all duration-300
                                                        transform-gpu hover:-translate-y-1 hover:shadow-lg max-md:shadow-lg ${skill.glow}`}
                                        >
                                            <Icon className={`w-8 h-8 ${skill.color} opacity-85 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110`} />
                                            <span className='font-semibold text-brand-text text-sm sm:text-base'>
                                                {skill.name}
                                            </span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}