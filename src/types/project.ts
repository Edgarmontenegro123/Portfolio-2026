export interface LocalisedText {
    es: string
    'en-GB': string
}

export interface Project {
    id: number
    avatar: string
    title: LocalisedText
    date: LocalisedText
    img: string
    resume: LocalisedText
    video: string
    description: LocalisedText
    tech: string
    deploy: string
    gitHub: string
}