import React from 'react'
import { confirmModalProps } from '../../utils/interfaces/interface'
import { flexClass } from '../../utils/helpers/helper';

const SkipTutorialCard:React.FC<confirmModalProps> = ({
    message,
    onConfirm,
    onCancel,
    confirmLabel = "Yes",
    cancelLabel = "No",
    isOpen
}) => {
    if (!isOpen) return null;
  return (
    <div className={`${flexClass} fixed inset-0 z-50  bg-black bg-opacity-75`}>
      <div className="p-6 text-white rounded-[40px] bg-primary-blue-black w-[85%] custom-shadow">
        <p className="mb-4  font-normal text-center text-[20px]">{message}</p>
        <p className='mb-3 text-xl font-normal text-center'>Skip tutorial?</p>
        <div className="flex justify-between">
          <button
            onClick={onConfirm}
            className="px-5 py-1 text-xl font-medium border-2 rounded-xl bg-gradient-to-b from-dark-green to-custom-green border-secondary-green"
          >
            {confirmLabel}
          </button>
          <button
            onClick={onCancel}
            className="px-5 py-1 text-xl font-medium border-2 rounded-xl bg-gradient-to-b from-dark-red to-custom-red border-primary-red"
          >
            {cancelLabel}
          </button>
        </div>
      </div>
    </div>
  )
}

export default SkipTutorialCard