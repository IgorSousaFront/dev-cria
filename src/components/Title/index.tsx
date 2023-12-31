// React
import { ReactNode } from "react"

export interface ISectionTitleProps {
  children: ReactNode
  color?: 'light' | 'primary'
}

export const SectionTitle = ({children, color = 'light'}: ISectionTitleProps) => {
  const getColor = (type: 'light' | 'primary') => {
    switch(type) {
      case 'primary': {
        return 'text-font-light dark:text-white'
      }
      case 'light': {
        return 'text-font-light dark:text-white'
      }
    }
  }

  return (
    <h2 className={`text-center mb-14 font-bold text-4xl md:text-5xl ${getColor(color)}`}>{children}</h2>
  )
}