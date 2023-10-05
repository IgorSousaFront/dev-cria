// React
import Link from "next/link"
import { ReactNode } from "react"

export interface ISocialIconsProps {
  icon: ReactNode,
  link: string
}

export const SocialIcon = ({icon, link}: ISocialIconsProps) => {
  return (
    <Link href={link} target="blank" className="text-font-light dark:text-white w-9 h-9 mr-3 md:mr-4 inline-flex items-center justify-center rounded-full border-solid border-[3px] border-primary">
      <span>
        {icon}
      </span>
    </Link>
  )
}