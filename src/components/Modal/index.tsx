// React
import { ReactNode, useContext } from "react"

// Components
import { Card } from '../Card'

// Contexts
import { ModalContext } from "@/contexts/modal-context"

// Icons
import { IoClose } from 'react-icons/io5'

interface IModalProps {
  isOpen: boolean
  children: ReactNode
}

export const Modal = ({children, isOpen}: IModalProps) => {
  const { toggleVisibility: toggleModal } = useContext(ModalContext)
  
  return (
    <div className={`w-screen h-screen bg-base/80 dark:bg-dark-base/80 fixed z-50 top-0 left-0 ${isOpen ? 'block' : 'hidden'}`}>
      <Card className="shadow-lg w-[90%] md:w-96 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 py-10 px-8">
        <button className="absolute bottom-full right-0 md:left-full m-2 text-font-light dark:text-white" onClick={toggleModal}>
          <IoClose size={40} />
        </button>
        {children}
      </Card>
    </div>
  )
}