export interface Project {
    title: string
    description: {
        es: string
        'en-GB': string
    }
    tags: string[]
    githubUrl?: string
    liveUrl?: string
    isFeatured?: boolean
}