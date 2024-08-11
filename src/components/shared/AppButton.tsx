import { buttonProps } from "../../utils/interfaces/interface"

const AppButton:React.FC<buttonProps> = ({text, onClick, className, icon}) => {
  return (
    <div className={`${className}`} onClick={onClick}>
        {text} {icon ? <img src={icon} alt="icon" /> : ""}
    </div>
  )
}

export default AppButton