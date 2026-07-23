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

import type { Project } from '../types/project'


const ProjectsMockUp: Project[] = [
    {
        id: 0,
        avatar: LogoTaskMateEvolution,
        title: {
            es: 'Task Mate Evolution!',
            'en-GB': 'Task Mate Evolution!'
        },
        date: {
            es: 'Octubre 2025',
            'en-GB': 'October 2025'
        },
        img: GifTaskMateEvolution,
        resume: {
            es: 'Task Mate Evolution es un gestor de tareas y notas móvil que combina texto y voz en una interfaz moderna y fluida.',
            'en-GB': 'Task Mate Evolution is a mobile task and notes manager that combines text and voice in a modern and fluid interface.'
        },
        video: 'https://vimeo.com/manage/videos/1135584450',
        description: {
            es: 'Task Mate Evolution es una aplicación móvil desarrollada con React Native (Expo) y TypeScript, diseñada como un gestor inteligente de tareas y notas, combinando texto y grabaciones de voz dentro de una interfaz moderna, minimalista y fluida.',
            'en-GB': 'Task Mate Evolution is a mobile application developed with React Native (Expo) and TypeScript, designed as an intelligent task and notes manager, combining text and voice recordings within a modern, minimalist and fluid interface.'
        },
        tech: 'TypeScript, React Native, Expo SDK 54',
        deploy: 'https://task-mate-by-montenegro.vercel.app/',
        gitHub: 'https://github.com/Edgarmontenegro123/task-mate-evolution'
    },

    {
        id: 1,
        avatar: LogoGordoniLtd,
        title: {
            es: 'Gordoni Limited',
            'en-GB': 'Gordoni Limited'
        },
        date: {
            es: 'Abril 2026',
            'en-GB': 'April 2026'
        },
        img: GifGordoniLtd,
        resume: {
            es: 'Sitio web corporativo desarrollado para establecer la presencia digital de Gordoni Limited con un diseño moderno, profesional y responsive.',
            'en-GB': 'Corporate website developed to establish Gordoni Limited digital presence with a modern, professional and responsive design.'
        },
        video: 'https://vimeo.com/1211913727?share=copy&fl=sv&fe=ci',
        description: {
            es: 'Gordoni Limited es un proyecto freelance desarrollado para dotar a la empresa de una presencia digital sólida y profesional. La aplicación consiste en un sitio web corporativo moderno, completamente responsive y optimizado para ofrecer una navegación fluida en cualquier dispositivo.',
            'en-GB': 'Gordoni Limited is a freelance project developed to provide the company with a solid and professional digital presence. The application is a modern, fully responsive corporate website optimised to provide a smooth experience on any device.'
        },
        tech: 'React, TypeScript, Tailwind CSS, Vite',
        deploy: 'https://www.gordoniltd.com/',
        gitHub: 'https://github.com/Edgarmontenegro123/gordoni-web'
    },

    {
        id: 2,
        avatar: LogoQuizUp,
        title: {
            es: 'QuizUp!',
            'en-GB': 'QuizUp!'
        },
        date: {
            es: 'Septiembre 2024',
            'en-GB': 'September 2024'
        },
        img: GifQuizUp,
        resume: {
            es: 'Juego de trivia que permite a los usuarios responder preguntas, escoger entre diferentes categorías y elegir la dificultad.',
            'en-GB': 'Trivia game that allows users to answer questions, choose different categories and select difficulty levels.'
        },
        video: 'https://vimeo.com/manage/videos/1010081429',
        description: {
            es: 'Es un juego de trivia que permite a los usuarios responder preguntas, escoger entre muchísimas categorías y elegir la dificultad para jugar.',
            'en-GB': 'A trivia game that allows users to answer questions, choose from many categories and select the difficulty level.'
        },
        tech: 'TypeScript, React, NextJs, Tailwind, Swiper, ESLint, Prettier, Jest, React Testing Library',
        deploy: 'https://quizup-by-montenegro.vercel.app/',
        gitHub: 'https://github.com/Edgarmontenegro123/quizup'
    },

    {
        id: 3,
        avatar: LogoClimApp,
        title: {
            es: 'ClimApp',
            'en-GB': 'ClimApp'
        },
        date: {
            es: 'Marzo 2021',
            'en-GB': 'March 2021'
        },
        img: GifClimApp,
        resume: {
            es: 'Primera App FrontEnd realizada con React y una API externa.',
            'en-GB': 'First FrontEnd application developed with React and an external API.'
        },
        video: 'https://vimeo.com/manage/videos/586698718',
        description: {
            es: 'Esta es una App con una interfaz amigable, que muestra la hora y la fecha detallada del lugar donde te encuentres, con un buscador intuitivo para elegir ciudades favoritas y observar sus datos climáticos más relevantes.',
            'en-GB': 'This is an application with a friendly interface that shows the time and detailed date of your location, with an intuitive search engine to select favourite cities and view their most relevant weather information.'
        },
        tech: 'JavaScript, React, Material UI, HTML5, CSS3',
        deploy: 'https://climappmontenegro.vercel.app',
        gitHub: 'https://github.com/Edgarmontenegro123/ClimApp'
    },

    {
        id: 4,
        avatar: LogoHealthier,
        title: {
            es: 'Healthier',
            'en-GB': 'Healthier'
        },
        date: {
            es: 'Agosto 2021',
            'en-GB': 'August 2021'
        },
        img: GifHealthier,
        resume: {
            es: 'E-Commerce realizado de manera grupal como proyecto final para Soy Henry Bootcamp.',
            'en-GB': 'E-Commerce developed as a group final project for Soy Henry Bootcamp.'
        },
        video: 'https://vimeo.com/manage/videos/586633960',
        description: {
            es: 'Con una interfaz intuitiva, permite comprar productos saludables, ordenarlos por precio o categoría, agregarlos a una wishlist o carrito de compra y finalizar el proceso mediante una pasarela de pagos.',
            'en-GB': 'With an intuitive interface, it allows users to buy healthy products, sort them by price or category, add them to a wishlist or shopping cart and complete purchases through a payment gateway.'
        },
        tech: 'React, Redux, Material UI, NodeJS, PostgreSQL',
        deploy: 'https://Healthier.vercel.app',
        gitHub: 'https://github.com/Healthier-Group/Healthier'
    },

    {
        id: 5,
        avatar: LogoTaskMate,
        title: {
            es: 'Task Mate',
            'en-GB': 'Task Mate'
        },
        date: {
            es: 'Septiembre 2024',
            'en-GB': 'September 2024'
        },
        img: GifTaskMate,
        resume: {
            es: 'Aplicación basada en el famoso proyecto To-Do List, potenciada con diferentes funcionalidades.',
            'en-GB': 'Application based on the famous To-Do List project, enhanced with different functionalities.'
        },
        video: 'https://vimeo.com/manage/videos/1010457455',
        description: {
            es: 'Esta App permite agregar notas o tareas, modificarlas, separarlas por colores, organizarlas mediante arrastre, eliminar tareas completadas y guardarlas en el dispositivo.',
            'en-GB': 'This application allows users to add notes or tasks, edit them, separate them by colours, organise them using drag and drop, remove completed tasks and save them locally.'
        },
        tech: 'TypeScript, React, NextJs, Tailwind, HTML5, CSS3',
        deploy: 'https://task-mate-by-montenegro.vercel.app/',
        gitHub: 'https://github.com/Edgarmontenegro123/task-mate'
    },

    {
        id: 6,
        avatar: LogoYoutube,
        title: {
            es: 'Youtube-Challenge',
            'en-GB': 'Youtube-Challenge'
        },
        date: {
            es: 'Noviembre 2023',
            'en-GB': 'November 2023'
        },
        img: GifYoutubeChallenge,
        resume: {
            es: 'App FrontEnd realizada con React y la API de Youtube.',
            'en-GB': 'FrontEnd application developed with React and the Youtube API.'
        },
        video: 'https://vimeo.com/manage/videos/586698718',
        description: {
            es: 'Esta App permite ingresar una URL de Youtube en un buscador intuitivo para obtener el título del vídeo, cantidad de visualizaciones y comentarios.',
            'en-GB': 'This application allows users to enter a Youtube URL in an intuitive search engine to obtain the video title, views count and comments.'
        },
        tech: 'JavaScript, React, Sass, HTML5, CSS3, Youtube API, Express',
        deploy: 'https://challenge-youtube.vercel.app/',
        gitHub: 'https://github.com/Edgarmontenegro123/challenge-youtube'
    }
]

export default ProjectsMockUp