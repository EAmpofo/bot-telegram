import React from 'react'
import { iconButtonProps } from '../../utils/interfaces/interface'

const IconButton:React.FC<iconButtonProps> = ({
    icon,
    label,
    onClick,
    flexClass,
    bgColor,
    borderColor,
    textColor,
    borderWidth
}) => {
  return (
    <div
      onClick={onClick}
      className={`${flexClass} h-[69px] w-[69px] rounded-lg flex-col ${bgColor} ${borderColor} ${borderWidth}`}
    >
      {icon}
      <p className={`text-sm font-normal ${textColor}`}>{label}</p>
    </div>
  )
}

export default IconButton