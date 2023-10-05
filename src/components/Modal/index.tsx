import { ModalContext } from "@/contexts/modal-context"
import { ReactNode, useContext } from "react"

import { IoClose } from 'react-icons/io5'

interface IModalProps {
  isOpen: boolean
  children: ReactNode
}

export const Modal = ({children, isOpen}: IModalProps) => {
  const { toggleVisibility: toggleModal } = useContext(ModalContext)
  
  return (
    <div className={`w-screen h-screen bg-base/80 dark:bg-dark-base/80 fixed z-50 top-0 left-0 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="shadow-lg w-[90%] md:w-96 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-white dark:bg-dark-bg  rounded p-6 text-primary">
        <button className="absolute bottom-full right-0 md:left-full m-2 text-font-light dark:text-white" onClick={toggleModal}>
          <IoClose size={40} />
        </button>
        {children}
      </div>
    </div>
  )
}