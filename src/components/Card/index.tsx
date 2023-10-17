// React
import { ReactNode } from "react";

interface ICardProps {
  children?: ReactNode
  className?: string
}

export const Card = ({children, className}: ICardProps) => {
  return (
    <div className={`text-font-light dark:text-white rounded-md shadow bg-white dark:bg-dark-base border border-gray-200 dark:border-stone-800 ${className}`}>{children}</div>
  )
}