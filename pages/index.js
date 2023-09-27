import { useState } from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
  const [isDark, setIsDark] = useState(false)
  const { theme, setTheme } = useTheme()

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsDark(prevIsDark => !prevIsDark)
    const newTheme = isDark ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
    <button onClick={toggleTheme}>
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}

export default ThemeSwitch
