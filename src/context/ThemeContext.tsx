import {useState, useEffect} from 'react'
import type {ReactNode} from 'react'
import {ThemeContext} from './ThemeContextInstance'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    // Inicializamos el estado buscando si el usuario ya tenía una preferencia guardada
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        const savedTheme = localStorage.getItem('portfolio-theme')
        if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme

        // Si no hay registro, heredamos la preferencia del sistema operativo
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    })

    // Cada vez que el tema cambie, modificamos el DOM real y el localStorage
    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
        localStorage.setItem('portfolio-theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}