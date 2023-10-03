// React
import { ReactNode } from "react"

interface IButtonProps {
  children: ReactNode
  onClick?: () => void
  type?: 'primary' | 'light'
}

export const Button = ({children, onClick, type = 'primary'}: IButtonProps) => {

  const setType = (type: string) => {
    switch(type) {
      case 'primary': {
        return 'bg-blue-primary border-blue-primary'
      }
      case 'light': {
        return 'bg-none border-light-gray'
      }
    }
  }

  return (
    <button onClick={onClick && onClick} className={`rounded-full py-2 px-8 border-[3px] border-solid ${setType(type)}`}>
      {children}
    </button>
  )
}