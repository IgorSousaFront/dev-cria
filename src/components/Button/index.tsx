// React
import { ReactNode } from "react"

interface IButtonProps {
  children: ReactNode
  onClick?: () => void
  type?: 'filled' | 'outlined'
  color?: 'primary' | 'light'
}

export const Button = ({
  children,
  onClick,
  type = 'filled',
  color = 'primary'
}: IButtonProps) => {

  const setType = () => {
    if(type === 'outlined') {
      if(color === 'primary') {
        return 'bg-none text-blue-primary border-blue-primary'
      } else if(color === 'light') {
        return 'bg-none text-white border-white'
      }
    } else if(type === 'filled') {
      return 'bg-blue-primary text-white border-blue-primary'
    }
  }

  return (
    <button onClick={onClick && onClick} className={`w-full rounded-full py-2 px-8 border-[3px] border-solid uppercase flex items-center justify-center ${setType()}`}>
      {children}
    </button>
  )
}