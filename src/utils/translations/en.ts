import type { TranslationType } from './es'

export const en: TranslationType = {
    nav: {
        about: 'About Me',
        projects: 'Projects',
        skills: 'Technologies',
        contact: 'Contact'
    },
    hero: {
        greeting: "Hi, I'm",
        role: '<Software Developer />',
        description: 'Software development student focused on building modern, efficient and modular web applications. Passionate about clean architecture ' +
            'and industry best practices.'
    },
    projects: {
        title: 'My Projects',
        subtitle: 'A selection of my most recent work',
        technologiesUsed: 'Built using technologies such as:',
        viewCode: 'Check out the Code here!',
        liveDemo: 'Try the App here!'
    },
    contact: {
        title: 'Contact',
        subtitle: 'Have a project in mind? Let\'s chat!',
        channelsTitle: 'Direct Channels',
        phoneLabel: 'Phone',
        cvButton: 'Download CV as PDF',
        residenceLabel: 'Location',
        formTitle: 'Send a Message',
        name: 'Name',
        email: 'Email Address',
        message: 'Message',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'An error occurred. Please try again.'
    }
}