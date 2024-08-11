
import { UFOBackground } from '../../assets/images'

const UfoOverlay = () => {
  return (
    <div className="absolute inset-0">
        <img
          src={UFOBackground}
          alt="ufoBack"
          className="object-cover w-full h-full"
        />
      </div>
  )
}

export default UfoOverlay