import { iconBoxProps } from "../../utils/interfaces/interface"


const IconBox:React.FC<iconBoxProps> = ({icon, className}) => {
  return (
    <div className={`${className}`}>{icon}</div>
  )
}

export default IconBox