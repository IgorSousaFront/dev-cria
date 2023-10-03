// React
import { ReactNode } from "react"

interface IButtonProps {
  children?: ReactNode
  onClick?: () => void
}

export const Button = ({children, onClick}: IButtonProps) => {

  return (
    <Button onClick={onClick && onClick}>
      {children && children}
    </Button>
  )
}