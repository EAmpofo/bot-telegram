import React from 'react'
import { alienCardProps } from '../../utils/interfaces/interface'

const AlienCard:React.FC<alienCardProps> = ({
    image,
    className,
    content
}) => {
  return (
    <div>
        <div className={`${className}`}>
            <img src={image} alt="alien" className="w-full h-[200px] object-cover"/>
            {content}
        </div>
    </div>
  )
}

export default AlienCard