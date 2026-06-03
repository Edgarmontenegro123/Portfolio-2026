import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import type { ThemeContextType } from '../context/ThemeContext'

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext)

    // Validamos que el hook se esté usando dentro del Provider correcto
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }

    return context
}