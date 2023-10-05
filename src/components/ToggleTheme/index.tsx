'use client'
// React
import { useState, useEffect } from 'react'

import { useTheme } from "next-themes"

export const ToggleTheme = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    <div className="w-64">
    </div>
  }
  
  return (
    <div className="w-64 flex justify-end">
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value={theme === 'light' ? 'true' : 'false'} onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="sr-only peer" />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-primary"></div>
        <span className="ml-3 text-sm font-medium text-gray-300">Modo escuro</span>
      </label>
    </div>
  )
}