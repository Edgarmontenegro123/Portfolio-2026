import { FaWhatsapp, FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6'

export const contactConstants = {
    whatsapp: 'https://wa.link/8x2m0y',
    phone: '+54 9 11 6210 1137',
    mailRedirect: 'mailto:edgarmontenegro321@gmail.com',
    email: 'edgarmontenegro321@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/edgarmontenegro/',
    perfilLinkedIn: 'edgarmontenegro',
    github: 'https://github.com/Edgarmontenegro123',
    perfilGithub: 'Edgarmontenegro123',
    twitter: 'https://twitter.com/MontenegroCode',
    perfilTwitter: 'MontenegroCode',
    curriculumPDF: 'https://drive.google.com/file/d/1BZgSkVU47Wwh7zIzllldf5WWYODy-xWY/view?usp=sharing',
    home: 'https://www.google.com/maps/place/Palermo,+CABA/'
}

export const CONTACT_CHANNELS_CONFIG = [
    {
        href: contactConstants.whatsapp,
        labelEs: 'Teléfono',
        labelEn: 'Phone',
        value: contactConstants.phone,
        icon: FaWhatsapp,
        color: 'text-[#25D366]',
        glow: 'hover:shadow-[#25D366]/10 hover:border-[#25D366]/30'
    },
    {
        href: contactConstants.linkedIn,
        labelEs: 'LinkedIn',
        labelEn: 'LinkedIn',
        value: contactConstants.perfilLinkedIn,
        icon: FaLinkedin,
        color: 'text-[#0077B5]',
        glow: 'hover:shadow-[#0077B5]/10 hover:border-[#0077B5]/30'
    },
    {
        href: contactConstants.github,
        labelEs: 'GitHub',
        labelEn: 'GitHub',
        value: contactConstants.perfilGithub,
        icon: FaGithub,
        color: 'text-brand-text dark:text-white',
        glow: 'hover:shadow-brand-text/10 hover:border-brand-text/30'
    },
    {
        href: contactConstants.twitter,
        labelEs: 'X (Twitter)',
        labelEn: 'X (Twitter)',
        value: `@${contactConstants.perfilTwitter}`,
        icon: FaXTwitter,
        color: 'text-brand-text dark:text-white',
        glow: 'hover:shadow-brand-text/10 hover:border-brand-text/30'
    }
]