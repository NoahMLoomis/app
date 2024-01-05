import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from 'lucide-react'

export const Toggler = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkMode)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('darkMode', `${darkMode}`)
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <button
      onClick={toggleDarkMode}
      className={`transition-colors ease-in-out duration-300 ${
        darkMode
          ? 'bg-gray-800 text-white'
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      } p-2 rounded-lg focus:outline-none`}
    >
      {darkMode ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}
