// React
import { ElementType } from 'react'

export interface ISkillCardProps {
  name: string
  icon: ElementType
}

export const SkillCard = ({name, icon}: ISkillCardProps) => {
  const Icon = icon

  return (
    <div
      className="bg-primary cursor-pointer flex flex-col items-center gap-2 text-center rounded p-4 w-28"
    >
      <Icon size={32} className="text-white" />
      <span className="font-bold text-white">
        {name}
      </span>
    </div>
  )
}

// w-full rounded-full py-2 px-8 border-[3px] border-solid uppercase flex items-center justify-center bg-primary text-white border-primary
// w-full rounded-full py-2 px-8 border-[3px] border-solid uppercase flex items-center justify-center bg-none text-primary border-primary