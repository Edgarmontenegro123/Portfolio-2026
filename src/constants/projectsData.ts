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

export const projectsMockUp: Project[] = [
    {
        id: 0,
        avatar: LogoTaskMateEvolution,
        title: 'Task Mate Evolution!',
        date: {
            es: 'Octubre 2025',
            'en-GB': 'October 2025'
        },
        img: GifTaskMateEvolution,
        video: 'https://vimeo.com/manage/videos/1135584450',
        description: {
            es: 'Task Mate Evolution es una aplicación móvil desarrollada con React Native (Expo) y TypeScript, diseñada como un gestor inteligente de tareas y notas, combinando texto y grabaciones de voz dentro de una interfaz moderna, minimalista y fluida. Próximamente en Google Play y AppStore',
            'en-GB': 'Task Mate Evolution is a mobile application developed with React Native (Expo) and TypeScript, designed as an intelligent task and note manager, combining text and voice recordings within a modern, minimalist and fluid interface. Coming soon to Google Play and AppStore'
        },
        tech: 'TypeScript, React Native, Expo SDH 54',
        deploy: 'https://task-mate-by-montenegro.vercel.app/',
        gitHub: 'https://github.com/Edgarmontenegro123/task-mate-evolution'
    },
    {
        id: 1,
        avatar: LogoQuizUp,
        title: 'QuizUp!',
        date: {
            es: 'Septiembre 2024',
            'en-GB': 'September 2024'
        },
        img: GifQuizUp,
        video: 'https://vimeo.com/manage/videos/1010081429',
        description: {
            es: 'Es un juego de trivia que permite a los usuarios responder preguntas, escoger entre muchísimas categorías y elegir la dificultad para jugar!',
            'en-GB': 'It is a trivia game that allows users to answer questions, choose from a wide range of categories, and select the difficulty level to play!'
        },        tech: 'TypeScript, React, NextJs, Tailwind, Swiper, ESLint, Prettier, Jest, React Testing Library',
        deploy: 'https://quizup-by-montenegro.vercel.app/',
        gitHub: 'https://github.com/Edgarmontenegro123/quizup'
    },
    {
        id: 4,
        avatar: LogoHealthier,
        title: 'Healthier',
        date: {
            es: 'Agosto 2021',
            'en-GB': 'August 2021'
        },
        img: GifHealthier,
        video: 'https://vimeo.com/manage/videos/586633960',
        description: {
            es: 'Con una interfaz muy intuitiva, que permite comprar productos saludables, ordenarlos por precio, por categoría, incluirlos en una wishlist o llevarlos a un carrito de compra donde se permite terminar el proceso de compra mediante una pasarela de pagos.',
            'en-GB': 'Featuring a highly intuitive interface that allows users to purchase healthy products, sort them by price or category, add them to a wishlist, or place them in a shopping cart to complete the checkout process via a payment gateway.'
        },        tech: 'React, Redux, Material UI, NodeJS, PostgreSQL',
        deploy: 'https://Healthier.vercel.app',
        gitHub: 'https://github.com/Healthier-Group/Healthier'
    },
    {
        id: 3,
        avatar: LogoClimApp,
        title: 'ClimApp',
        date: {
            es: 'Marzo 2021',
            'en-GB': 'March 2021'
        },
        img: GifClimApp,
        video: 'https://vimeo.com/manage/videos/586698718',
        description: {
            es: 'Esta es una App con una interfaz amigable, que muestra la hora y la fecha detallada del lugar donde te encuentres, con un buscador intuitivo, para que elijas tus ciudades favoritas y en ellas puedas observar los datos climáticos más relevantes.',
            'en-GB': 'This is an app with a user-friendly interface that displays the detailed time and date of your location, featuring an intuitive search tool to select your favourite cities and view their most relevant weather data.'
        },        tech: 'JavaScript, React, Material UI, HTML5, CSS3',
        deploy: 'https://climappmontenegro.vercel.app',
        gitHub: 'https://github.com/Edgarmontenegro123/ClimApp'
    },
    {
        id: 2,
        avatar: LogoTaskMate,
        title: 'Task Mate',
        date: {
            es: 'Septiembre 2024',
            'en-GB': 'September 2024'
        },
        img: GifTaskMate,
        video: 'https://vimeo.com/manage/videos/1010457455',
        description: {
            es: 'Esta es una App con una interfaz amigable, que permite agregar notas o tareas, modificarlas, separarlas por colores, organizarlas con un simple arrastre, eliminar las tareas completadas y guardarlas en tu dispositivo entre otras funcionalidades.',
            'en-GB': 'This is an app with a friendly interface that lets you add notes or tasks, modify them, colour-code them, organise them with a simple drag-and-drop, delete completed tasks, and save them on your device among other features.'
        },        tech: 'Typescript, React, NextJs, Tailwind, HTML5, CSS3',
        deploy: 'https://task-mate-by-montenegro.vercel.app/',
        gitHub: 'https://github.com/Edgarmontenegro123/task-mate'
    },
    {
        id: 5,
        avatar: LogoYoutube,
        title: 'Youtube-Challenge',
        date: {
            es: 'Noviembre 2023',
            'en-GB': 'November 2023'
        },
        img: GifYoutubeChallenge,
        video: 'https://vimeo.com/manage/videos/586698718',
        description: {
            es: 'Esta es una App con una interfaz amigable, que permite ingresar una URL de Youtube en un buscador intuitivo, que trae el título del video, la cantidad de views y sus comentarios.',
            'en-GB': 'This is an app with a friendly interface that allows users to enter a YouTube URL into an intuitive search bar, fetching the video title, view count, and its comments.'
        },        tech: 'JavaScript, React, Sass, HTML5, CSS3, Youtube API, Express',
        deploy: 'https://challenge-youtube.vercel.app/',
        gitHub: 'https://github.com/Edgarmontenegro123/challenge-youtube'
    }
]