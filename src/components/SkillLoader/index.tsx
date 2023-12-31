import { motion } from "framer-motion"

export interface ISkillLoaderProps {
  label: string
  percent?: number
}

export const SkillLoader = ({label, percent = 0}: ISkillLoaderProps) => {
  const setPercent = (value: number) => {
    return `${value}%`
  }

  return (
    <div className="relative bg-light-gray dark:bg-dark-base h-8 w-full rounded-full overflow-hidden">
      <motion.div
        className={`h-full absolute left-0 top-0 bg-primary rounded-r-full`}
        initial={{ width: '30%' }}
        whileInView={{ width: setPercent(percent) }}
        viewport={{ once: true }}
      />
      

      <span className="absolute top-1/2 left-6 -translate-y-2/4 color-white">{label}</span>
    </div>
  )
}