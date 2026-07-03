import {
    FaHtml5,
    FaCss3Alt,
    FaSass,
    FaBootstrap,
    FaReact,
    FaNodeJs,
    FaGolang,
    FaGitAlt,
    FaGithub,
    FaGitlab,
    FaDocker
} from 'react-icons/fa6'

import {
    SiTailwindcss,
    SiJavascript,
    SiTypescript,
    SiExpress,
    SiVercel,
    SiPostgresql,
    SiNetlify,
    SiRender,
    SiRailway
} from 'react-icons/si'

export const SKILL_CATEGORIES_CONFIG = [
    {
        titleEs: 'Desarrollo Frontend',
        titleEn: 'Frontend Development',
        skills: [
            {name: 'HTML', icon: FaHtml5, color: 'text-[#E34F26]', glow: 'hover:shadow-[#E34F26]/20 hover:border-[#E34F26]/40 max-md:shadow-[#E34F26]/20 max-md:border-[#E34F26]/40'},
            {name: 'CSS', icon: FaCss3Alt, color: 'text-[#1572B6]', glow: 'hover:shadow-[#1572B6]/20 hover:border-[#1572B6]/40 max-md:shadow-[#1572B6]/20 max-md:border-[#1572B6]/40'},
            {name: 'Sass', icon: FaSass, color: 'text-[#CC6699]', glow: 'hover:shadow-[#CC6699]/20 hover:border-[#CC6699]/40 max-md:shadow-[#CC6699]/20 max-md:border-[#CC6699]/40'},
            {name: 'Bootstrap', icon: FaBootstrap, color: 'text-[#7952B3]', glow: 'hover:shadow-[#7952B3]/20 hover:border-[#7952B3]/40 max-md:shadow-[#7952B3]/20 max-md:border-[#7952B3]/40'},
            {name: 'Tailwind', icon: SiTailwindcss, color: 'text-[#06B6D4]', glow: 'hover:shadow-[#06B6D4]/20 hover:border-[#06B6D4]/40 max-md:shadow-[#06B6D4]/20 max-md:border-[#06B6D4]/40'},
            {name: 'JavaScript', icon: SiJavascript, color: 'text-[#F7DF1E]', glow: 'hover:shadow-[#F7DF1E]/10 hover:border-[#F7DF1E]/30 max-md:shadow-[#F7DF1E]/20 max-md:border-[#F7DF1E]/40'},
            {name: 'TypeScript', icon: SiTypescript, color: 'text-[#3178C6]', glow: 'hover:shadow-[#3178C6]/20 hover:border-[#3178C6]/40 max-md:shadow-[#3178C6]/20 max-md:border-[#3178C6]/40'},
            {name: 'React', icon: FaReact, color: 'text-[#61DAFB]', glow: 'hover:shadow-[#61DAFB]/20 hover:border-[#61DAFB]/40 max-md:shadow-[#61DAFB]/20 max-md:border-[#61DAFB]/40'}
        ]
    },
    {
        titleEs: 'Desarrollo Backend',
        titleEn: 'Backend Development',
        skills: [
            {name: 'Go', icon: FaGolang, color: 'text-[#00ADD8]', glow: 'hover:shadow-[#00ADD8]/20 hover:border-[#00ADD8]/40 max-md:shadow-[#00ADD8]/20 max-md:border-[#00ADD8]/40'},
            {name: 'Node.js', icon: FaNodeJs, color: 'text-[#339933]', glow: 'hover:shadow-[#339933]/20 hover:border-[#339933]/40 max-md:shadow-[#339933]/20 max-md:border-[#339933]/40'},
            {name: 'Express', icon: SiExpress, color: 'text-brand-text dark:text-white', glow: 'hover:shadow-brand-text/10 hover:border-brand-text/30 max-md:shadow-brand-text/10 max-md:border-brand-text/30'},
            {name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-600 dark:text-blue-400', glow: 'hover:shadow-blue-500/10 hover:border-blue-500/30 max-md:shadow-blue-500/10 max-md:border-blue-500/30'}
        ]
    },
    {
        titleEs: 'Herramientas & Versionado',
        titleEn: 'Tools & Version Control',
        skills: [
            {name: 'Git', icon: FaGitAlt, color: 'text-[#F05032]', glow: 'hover:shadow-[#F05032]/20 hover:border-[#F05032]/40 max-md:shadow-[#F05032]/20 max-md:border-[#F05032]/40'},
            {name: 'GitHub', icon: FaGithub, color: 'text-brand-text dark:text-white', glow: 'hover:shadow-brand-text/10 hover:border-brand-text/30 max-md:shadow-brand-text/10 max-md:border-brand-text/30'},
            {name: 'GitLab', icon: FaGitlab, color: 'text-[#FC6D26]', glow: 'hover:shadow-[#FC6D26]/20 hover:border-[#FC6D26]/40 max-md:shadow-[#FC6D26]/20 max-md:border-[#FC6D26]/40'}
        ]
    },
    {
        titleEs: 'Despliegue / Cloud',
        titleEn: 'Deployment / Cloud',
        skills: [
            {name: 'Vercel', icon: SiVercel, color: 'text-brand-text dark:text-white', glow: 'hover:shadow-brand-text/10 hover:border-brand-text/30 max-md:shadow-brand-text/10 max-md:border-brand-text/30'},
            {name: 'Netlify', icon: SiNetlify, color: 'text-teal-500 dark:text-teal-400', glow: 'hover:shadow-teal-500/10 hover:border-teal-500/30 max-md:shadow-teal-500/10 max-md:border-teal-500/30'},
            {name: 'Docker', icon: FaDocker, color: 'text-sky-500 dark:text-sky-400', glow: 'hover:shadow-sky-500/10 hover:border-sky-500/30 max-md:shadow-sky-500/10 max-md:border-sky-500/30'},
            {name: 'Render', icon: SiRender, color: 'text-brand-text dark:text-white', glow: 'hover:shadow-brand-text/10 hover:border-brand-text/30 max-md:shadow-brand-text/10 max-md:border-brand-text/30'},
            {name: 'Railway', icon: SiRailway, color: 'text-brand-text dark:text-white', glow: 'hover:shadow-brand-text/10 hover:border-brand-text/30 max-md:shadow-brand-text/10 max-md:border-brand-text/30'}
        ]
    }
]