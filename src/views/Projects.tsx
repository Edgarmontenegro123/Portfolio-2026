import { useLanguage } from '../hooks/useLanguage'
import { getTranslation } from '../utils/translations'
import { ProjectCard } from '../components/ProjectCard'
import type { Project } from '../types/project'
import LogoTaskMateEvolution from '../assets/Images/taskMateEvolutionLogo.png'
import LogoQuizUp from '../assets/Images/quizUpLogo.png'
import LogoClimApp from '../assets/Images/sunnyCloud.png'
import LogoHealthier from '../assets/Images/healthier.png'
import LogoTaskMate from '../assets/Images/tasksLogo.png'
import LogoYoutube from '../assets/Images/youtubeLogo.png'
import GifTaskMateEvolution from '../assets/Images/gifTaskMateEvolution.gif'
import GifQuizUp from '../assets/Images/gifQuizUp.gif'
import GifClimApp from '../assets/Images/gifClimApp.gif'
import GifHealthier from '../assets/Images/gifHealthier.gif'
import GifTaskMate from '../assets/Images/gifTaskMate.gif'
import GifYoutubeChallenge from '../assets/Images/gifYoutubeChallenge.gif'

export const Projects = () => {
    const { language } = useLanguage()
    const t = getTranslation(language)

    const projectsData: Project[] = [
        {
            id: 0,
            avatar: LogoTaskMateEvolution,
            title: 'Task Mate Evolution!',
            date: language === 'es' ? 'Octubre 2025' : 'October 2025',
            img: GifTaskMateEvolution,
            video: 'https://vimeo.com/manage/videos/1135584450',
            description: 'Task Mate Evolution es una aplicación móvil desarrollada con React Native (Expo) y TypeScript, diseñada como un gestor inteligente de tareas y notas, combinando texto y grabaciones de voz dentro de una interfaz moderna, minimalista y fluida. Próximamente en Google Play y AppStore',
            tech: 'TypeScript, React Native, Expo SDH 54',
            deploy: 'https://task-mate-by-montenegro.vercel.app/',
            gitHub: 'https://github.com/Edgarmontenegro123/task-mate-evolution'
        },
        {
            id: 1,
            avatar: LogoQuizUp,
            title: 'QuizUp!',
            date: language === 'es' ? 'Septiembre 2024' : 'September 2024',
            img: GifQuizUp,
            video: 'https://vimeo.com/manage/videos/1010081429',
            description: 'Es un juego de trivia que permite a los usuarios responder preguntas, escoger entre muchísimas categorías y elegir la dificultad para jugar!',
            tech: 'TypeScript, React, NextJs, Tailwind, Swiper, ESLint, Prettier, Jest, React Testing Library',
            deploy: 'https://quizup-by-montenegro.vercel.app/',
            gitHub: 'https://github.com/Edgarmontenegro123/quizup'
        },
        {
            id: 4,
            avatar: LogoHealthier,
            title: 'Healthier',
            date: language === 'es' ? 'Agosto 2021' : 'August 2021',
            img: GifHealthier,
            video: 'https://vimeo.com/manage/videos/586633960',
            description: 'Con una interfaz muy intuitiva, que permite comprar productos saludables, ordenarlos por precio, por categoría, incluirlos en una wishlist o llevarlos a un carrito de compra donde se permite terminar el proceso de compra mediante una pasarela de pagos.',
            tech: 'React, Redux, Material UI, NodeJS, PostgreSQL',
            deploy: 'https://Healthier.vercel.app',
            gitHub: 'https://github.com/Healthier-Group/Healthier'
        },
        {
            id: 3,
            avatar: LogoClimApp,
            title: 'ClimApp',
            date: language === 'es' ? 'Marzo 2021' : 'March 2021',
            img: GifClimApp,
            video: 'https://vimeo.com/manage/videos/586698718',
            description: 'Esta es una App con una interfaz amigable, que muestra la hora y la fecha detallada del lugar donde te encuentres, con un buscador intuitivo, para que elijas tus ciudades favoritas y en ellas puedas observar los datos climáticos más relevantes.',
            tech: 'JavaScript, React, Material UI, HTML5, CSS3',
            deploy: 'https://climappmontenegro.vercel.app',
            gitHub: 'https://github.com/Edgarmontenegro123/ClimApp'
        },
        {
            id: 2,
            avatar: LogoTaskMate,
            title: 'Task Mate',
            date: language === 'es' ? 'Septiembre 2024' : 'September 2024',
            img: GifTaskMate,
            video: 'https://vimeo.com/manage/videos/1010457455',
            description: 'Esta es una App con una interfaz amigable, que permite agregar notas o tareas, modificarlas, separarlas por colores, organizarlas con un simple arrastre, eliminar las tareas completadas y guardarlas en tu dispositivo entre otras funcionalidades.',
            tech: 'Typescript, React, NextJs, Tailwind, HTML5, CSS3',
            deploy: 'https://task-mate-by-montenegro.vercel.app/',
            gitHub: 'https://github.com/Edgarmontenegro123/task-mate'
        },
        {
            id: 5,
            avatar: LogoYoutube,
            title: 'Youtube-Challenge',
            date: language === 'es' ? 'Noviembre 2023' : 'November 2023',
            img: GifYoutubeChallenge,
            video: 'https://vimeo.com/manage/videos/586698718',
            description: 'Esta es una App con una interfaz amigable, que permite ingresar una URL de Youtube en un buscador intuitivo, que trae el título del video, la cantidad de views y sus comentarios.',
            tech: 'JavaScript, React, Sass, HTML5, CSS3, Youtube API, Express',
            deploy: 'https://challenge-youtube.vercel.app/',
            gitHub: 'https://github.com/Edgarmontenegro123/challenge-youtube'
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

                {/* Grilla responsiva de tarjetas con acordeón */}
                <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                    {projectsData.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}