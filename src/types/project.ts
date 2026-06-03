export interface Project {
    id: number
    avatar: string
    title: string
    tech: string
    deploy: string
    gitHub: string
    img: string
    video: string
    date: {
        es: string
        'en-GB': string
    }
    description: {
        es: string
        'en-GB': string
    }
    resume?: string
}