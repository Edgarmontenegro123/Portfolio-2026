import { useLanguage } from '../hooks/useLanguage'
import {
    FaReact, FaNodeJs, FaGolang, FaGithub, FaDropbox
} from 'react-icons/fa6'
import {
    SiTypescript, SiVercel, SiTailwindcss, SiEtsy, SiExpress
} from 'react-icons/si'

export const Skills = () => {
    const { language } = useLanguage()

    // Agrupamos tus tecnologías por categorías para que sea más ordenado
    const skillCategories = [
        {
            title: language === 'es' ? 'Desarrollo Backend' : 'Backend Development',
            skills: [
                { name: 'Go (Golang)', icon: FaGolang, color: 'hover:text-[#00ADD8] hover:border-[#00ADD8]/30' },
                { name: 'Node.js', icon: FaNodeJs, color: 'hover:text-[#339933] hover:border-[#339933]/30' },
                { name: 'Express', icon: SiExpress, color: 'hover:text-brand-text hover:border-brand-text/30' },
                { name: 'TypeScript', icon: SiTypescript, color: 'hover:text-[#3178C6] hover:border-[#3178C6]/30' },
            ]
        },
        {
            title: language === 'es' ? 'Desarrollo Frontend' : 'Frontend Development',
            skills: [
                { name: 'React', icon: FaReact, color: 'hover:text-[#61DAFB] hover:border-[#61DAFB]/30' },
                { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'hover:text-[#06B6D4] hover:border-[#06B6D4]/30' },
            ]
        },
        {
            title: language === 'es' ? 'Herramientas & Plataformas' : 'Tools & Platforms',
            skills: [
                { name: 'GitHub', icon: FaGithub, color: 'hover:text-[#181717] dark:hover:text-white hover:border-brand-text/30' },
                { name: 'Vercel', icon: SiVercel, color: 'hover:text-brand-text hover:border-brand-text/30' },
                { name: 'Etsy Store Logic', icon: SiEtsy, color: 'hover:text-[#F16521] hover:border-[#F16521]/30' },
                { name: 'Dropbox API', icon: FaDropbox, color: 'hover:text-[#0061FF] hover:border-[#0061FF]/30' },
            ]
        }
    ]

    return (
        // Dejamos la sección transparente por defecto para que las partículas fluyan por detrás
        <section id='skills' className='relative z-10 py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300'>
            <div className='max-w-6xl mx-auto'>

                {/* Cabecera de la sección */}
                <div className='text-center md:text-left mb-16'>
                    <h2 className='text-3xl font-extrabold text-brand-text sm:text-4xl tracking-tight'>
                        {language === 'es' ? 'Tecnologías y Herramientas' : 'Skills & Technologies'}
                    </h2>
                    <p className='mt-3 text-xl text-brand-secondary max-w-2xl'>
                        {language === 'es'
                            ? 'El stack técnico y ecosistema digital que utilizo para dar vida a los proyectos.'
                            : 'The technical stack and digital ecosystem I use to bring projects to life.'}
                    </p>
                </div>

                {/* Contenedor de Categorías */}
                <div className='space-y-12'>
                    {skillCategories.map((category, index) => (
                        <div key={index} className='space-y-4'>
                            <h3 className='font-bold text-brand-secondary tracking-wide uppercase text-sm'>
                                {category.title}
                            </h3>

                            {/* Cuadrícula de Skills */}
                            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                                {category.skills.map((skill, idx) => {
                                    const Icon = skill.icon;
                                    return (
                                        <div
                                            key={idx}
                                            className={`flex items-center gap-4 p-4 rounded-xl bg-brand-bg/60 backdrop-blur-xs border border-brand-text/10 transition-all duration-300 transform-gpu hover:-translate-y-1 hover:shadow-md ${skill.color} group`}
                                        >
                                            <Icon className='w-8 h-8 text-brand-secondary transition-colors duration-300 group-hover:scale-110' />
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