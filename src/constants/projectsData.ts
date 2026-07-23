import LogoTaskMateEvolution from '../assets/Images/taskMateEvolutionLogo.png'
import LogoGordoniLtd from '../assets/Images/GordoniLtdLogo.png'
import LogoQuizUp from '../assets/Images/quizUpLogo.png'
import LogoClimApp from '../assets/Images/sunnyCloud.png'
import LogoHealthier from '../assets/Images/healthier.png'
import LogoTaskMate from '../assets/Images/tasksLogo.png'
import LogoYoutube from '../assets/Images/youtubeLogo.png'
import GifTaskMateEvolution from '../assets/Images/gifTaskMateEvolution.gif'
import GifGordoniLtd from '../assets/Images/GifGordoniLtd.gif'
import GifQuizUp from '../assets/Images/gifQuizUp.gif'
import GifClimApp from '../assets/Images/gifClimApp.gif'
import GifHealthier from '../assets/Images/gifHealthier.gif'
import GifTaskMate from '../assets/Images/gifTaskMate.gif'
import GifYoutubeChallenge from '../assets/Images/gifYoutubeChallenge.gif'

const MockUp = [{
    id: 0,
    avatar: LogoTaskMateEvolution,
    title: 'Task Mate Evolution!',
    date: 'Octubre 2025',
    img: GifTaskMateEvolution,
    resume: 'Task Mate Evolution es un gestor de tareas y notas móvil que combina texto y voz en una interfaz moderna y fluida.',
    video: 'https://vimeo.com/manage/videos/1135584450',
    description: 'Task Mate Evolution es una aplicación móvil desarrollada con React Native (Expo) y TypeScript, diseñada como un gestor inteligente de tareas y notas, combinando texto y grabaciones de voz dentro de una interfaz moderna, minimalista y fluida. Próximamente en Google Play y AppStore',
    tech: 'TypeScript, React Native, Expo SDH 54',
    deploy: 'https://task-mate-by-montenegro.vercel.app/',
    gitHub: 'https://github.com/Edgarmontenegro123/task-mate-evolution'
},
    {
        id: 1,
        avatar: LogoGordoniLtd,
        title: 'Gordoni Limited',
        date: 'Abril 2026',
        img: GifGordoniLtd,
        resume: 'Sitio web corporativo desarrollado para establecer la presencia digital de Gordoni Limited con un diseño moderno, profesional y responsive.',
        video: 'https://vimeo.com/1211913727?share=copy&fl=sv&fe=ci',
        description: 'Gordoni Limited es un proyecto freelance desarrollado en tiempo récord para dotar a la empresa de una presencia digital sólida y profesional. La aplicación consiste en un sitio web corporativo moderno, completamente responsive y optimizado para ofrecer una navegación fluida en cualquier dispositivo. Construido con React, TypeScript, Vite y Tailwind CSS, el proyecto prioriza el rendimiento, la experiencia de usuario y una identidad visual alineada con la marca, permitiendo a la empresa presentar sus servicios de manera clara y generar confianza desde su lanzamiento.',
        tech: 'React, TypeScript, Tailwind CSS, Vite',
        deploy: 'https://www.gordoniltd.com/',
        gitHub: 'https://github.com/Edgarmontenegro123/gordoni-web'
    },
    {
        id: 2,
        avatar: LogoQuizUp,
        title: 'QuizUp!',
        date: 'Septiembre 2024',
        img: GifQuizUp,
        resume: 'Juego de trivia que permite a los usuarios responder preguntas, escoger entre diferentes categorías y elegir la dificultad para jugar!',
        video: 'https://vimeo.com/manage/videos/1010081429',
        description: 'Es un juego de trivia que permite a los usuarios responder preguntas, escoger entre muchísimas categorías y elegir la dificultad para jugar!',
        tech: 'TypeScript, React, NextJs, Tailwind, Swiper, ESLint, Prettier, Jest, React Testing Library',
        deploy: 'https://quizup-by-montenegro.vercel.app/',
        gitHub: 'https://github.com/Edgarmontenegro123/quizup'
    },
    {
        id: 3,
        avatar: LogoClimApp,
        title: 'ClimApp',
        date: 'Marzo 2021',
        img: GifClimApp,
        resume: 'Primera App FrontEnd realizada con React y una API externa.',
        video: 'https://vimeo.com/manage/videos/586698718',
        description: 'Esta es una App con una interfaz amigable, que muestra la hora y la fecha detallada del lugar donde te encuentres, con un buscador intuitivo, para que elijas tus ciudades favoritas y en ellas puedas observar los datos climáticos más relevantes.',
        tech: 'JavaScript, React, Material UI, HTML5, CSS3',
        deploy: 'https://climappmontenegro.vercel.app',
        gitHub: 'https://github.com/Edgarmontenegro123/ClimApp'
    },
    {
        id: 4,
        avatar: LogoHealthier,
        title: 'Healthier',
        date: 'Agosto 2021',
        img: GifHealthier,
        resume: 'E-Commerce realizado de manera grupal como proyecto final para Soy Henry Bootcamp.',
        video: 'https://vimeo.com/manage/videos/586633960',
        description: 'Con una interfaz muy intuitiva, que permite comprar productos saludables, ordenarlos por precio, por categoría, incluirlos en una wishlist  o llevarlos a un carrito de compra donde se permite terminar el proceso de compra mediante una pasarela de pagos.',
        tech: 'React, Redux, Material UI, NodeJS, PostgreSQL',
        deploy: 'https://Healthier.vercel.app',
        gitHub: 'https://github.com/Healthier-Group/Healthier'
    },
    {
        id: 5,
        avatar: LogoTaskMate,
        title: 'Task Mate',
        date: 'Septiembre 2024',
        img: GifTaskMate,
        resume: 'Aplicación basada en el famoso proyecto To-Do List, potenciada con diferentes funcionalidades.',
        video: 'https://vimeo.com/manage/videos/1010457455',
        description: 'Esta es una App con una interfaz amigable, que permite agregar notas o tareas, modificarlas, separarlas por colores, organizarlas con un simple arrastre, eliminar las tareas completadas y guardarlas en tu dispositivo entre otras funcionalidades.',
        tech: 'Typescript, React, NextJs, Tailwind, HTML5, CSS3',
        deploy: 'https://task-mate-by-montenegro.vercel.app/',
        gitHub: 'https://github.com/Edgarmontenegro123/task-mate'
    },
    {
        id: 6,
        avatar: LogoYoutube,
        title: 'Youtube-Challenge',
        date: 'Noviembre 2023',
        img: GifYoutubeChallenge,
        resume: 'App FrontEnd realizada con React y la API de Youtube.',
        video: 'https://vimeo.com/manage/videos/586698718',
        description: 'Esta es una App con una interfaz amigable, que permite ingresar una URL de Youtube en un buscador intuitivo, que trae el título del video, la cantidad de views y sus comentarios.',
        tech: 'JavaScript, React, Sass, HTML5, CSS3, Youtube API, Express',
        deploy: 'https://challenge-youtube.vercel.app/',
        gitHub: 'https://github.com/Edgarmontenegro123/challenge-youtube'
    }]

export default MockUp