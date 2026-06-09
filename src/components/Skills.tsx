import { useLanguage } from '../hooks/useLanguage'
import {
    FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaReact, FaNodeJs, FaGolang, FaGitAlt, FaGithub, FaGitlab, FaDocker
} from 'react-icons/fa6'
import {
    SiTailwindcss, SiJavascript, SiTypescript, SiExpress, SiVercel, SiPostgresql, SiNetlify, SiRender, SiRailway
} from 'react-icons/si'

export const Skills = () => {
    const { language } = useLanguage()

    const skillCategories = [
        {
            title: language === 'es' ? 'Desarrollo Frontend' : 'Frontend Development',
            skills: [
                { name: 'HTML', icon: FaHtml5, color: 'text-[#E34F26]', glow: 'hover:shadow-[#E34F26]/20 hover:border-[#E34F26]/40' },
                { name: 'CSS', icon: FaCss3Alt, color: 'text-[#1572B6]', glow: 'hover:shadow-[#1572B6]/20 hover:border-[#1572B6]/40' },
                { name: 'Sass', icon: FaSass, color: 'text-[#CC6699]', glow: 'hover:shadow-[#CC6699]/20 hover:border-[#CC6699]/40' },
                { name: 'Bootstrap', icon: FaBootstrap, color: 'text-[#7952B3]', glow: 'hover:shadow-[#7952B3]/20 hover:border-[#7952B3]/40' },
                { name: 'Tailwind', icon: SiTailwindcss, color: 'text-[#06B6D4]', glow: 'hover:shadow-[#06B6D4]/20 hover:border-[#06B6D4]/40' },
                { name: 'JavaScript', icon: SiJavascript, color: 'text-[#F7DF1E]', glow: 'hover:shadow-[#F7DF1E]/10 hover:border-[#F7DF1E]/30' },
                { name: 'TypeScript', icon: SiTypescript, color: 'text-[#3178C6]', glow: 'hover:shadow-[#3178C6]/20 hover:border-[#3178C6]/40' },
                { name: 'React', icon: FaReact, color: 'text-[#61DAFB]', glow: 'hover:shadow-[#61DAFB]/20 hover:border-[#61DAFB]/40' }
            ]
        },
        {
            title: language === 'es' ? 'Desarrollo Backend' : 'Backend Development',
            skills: [
                { name: 'Go', icon: FaGolang, color: 'text-[#00ADD8]', glow: 'hover:shadow-[#00ADD8]/20 hover:border-[#00ADD8]/40' },
                { name: 'Node.js', icon: FaNodeJs, color: 'text-[#339933]', glow: 'hover:shadow-[#339933]/20 hover:border-[#339933]/40' },
                { name: 'Express', icon: SiExpress, color: 'text-brand-text dark:text-white', glow: 'hover:shadow-brand-text/10 hover:border-brand-text/30' },
                { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-600 dark:text-blue-400', glow: 'hover:shadow-blue-500/10 hover:border-blue-500/30'}
            ]
        },
        {
            title: language === 'es' ? 'Herramientas & Versionado' : 'Tools & Version Control',
            skills: [
                { name: 'Git', icon: FaGitAlt, color: 'text-[#F05032]', glow: 'hover:shadow-[#F05032]/20 hover:border-[#F05032]/40' },
                { name: 'GitHub', icon: FaGithub, color: 'text-brand-text dark:text-white', glow: 'hover:shadow-brand-text/10 hover:border-brand-text/30' },
                { name: 'GitLab', icon: FaGitlab, color: 'text-[#FC6D26]', glow: 'hover:shadow-[#FC6D26]/20 hover:border-[#FC6D26]/40' }
            ]
        },
        {
            title: language === 'es' ? 'Despliegue / Cloud' : 'Deployment / Cloud',
            skills: [
                { name: 'Vercel', icon: SiVercel, color: 'text-brand-text dark:text-white', glow: 'hover:shadow-brand-text/10 hover:border-brand-text/30' },
                { name: 'Netlify', icon: SiNetlify, color: 'text-teal-500 dark:text-teal-400', glow: 'hover:shadow-teal-500/10 hover:border-teal-500/30'},
                { name: 'Docker', icon: FaDocker, color: 'text-sky-500 dark:text-sky-400', glow: 'hover:shadow-sky-500/10 hover:border-sky-500/30'},
                { name: 'Render', icon: SiRender, color: 'text-brand-text dark:text-white', glow: 'hover:shadow-brand-text/10 hover:border-brand-text/30'},
                { name: 'Railway', icon: SiRailway, color: 'text-brand-text dark:text-white', glow: 'hover:shadow-brand-text/10 hover:border-brand-text/30'}
            ]
        }
    ]

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
                    {skillCategories.map((category, index) => (
                        <div key={index} className='space-y-4'>
                            <h3 className='font-bold text-brand-secondary tracking-wide uppercase text-sm'>
                                {category.title}
                            </h3>
                            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                                {category.skills.map((skill, idx) => {
                                    const Icon = skill.icon
                                    return (
                                        <div
                                            key={idx}
                                            className={`flex items-center gap-4 p-4 rounded-xl bg-brand-bg border border-brand-text/10 transition-all duration-300 transform-gpu hover:-translate-y-1 hover:shadow-lg ${skill.glow} group`}
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