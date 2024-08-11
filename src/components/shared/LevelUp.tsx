import Elements from "../../assets/icons/svgs/Elements";
import { flexBtwn, flexClass } from "../../utils/helpers/helper";
import { levelUpProps } from "../../utils/interfaces/interface";
import BackgroundPattern from "./BackgroundPattern";

const LevelUp: React.FC<levelUpProps> = ({
  closeIcon,
  energy,
  energyValue,
  imageIcon,
  multitap,
  multitapValue,
  title,
  className,
  onClose,
}) => {
  return (
    <div className={`${flexClass} fixed inset-0 z-50 bg-black bg-opacity-75`}>
      <div className={`${flexClass} ${className} relative overflow-hidden`}>
        <div className="absolute top-3 right-3" onClick={onClose}>
          {closeIcon}
        </div>
        <div className={`${flexClass} flex-col w-[80%] z-40`}>
          {imageIcon}
          <p className="text-[33px]">{title}</p>
          <div className={`${flexBtwn} w-full my-5`}>
            <div className={`${flexClass} flex-col`}>
              <p className="text-secondary-blue-shade">{multitap}</p>
              <p>{multitapValue}</p>
            </div>
            <div className={`${flexClass} flex-col`}>
              <p className="text-secondary-blue-shade">{energy}</p>
              <p>{energyValue}</p>
            </div>
          </div>
          <button
            className="btnLevel w-full h-[50px] rounded-lg mt-4 relative z-40 text-[20px] font-medium "
            onClick={onClose}
          >
            Close
          </button>
        </div>
        <BackgroundPattern className="opacity-30" image={<Elements height="685" width="431"/>} />
      </div>
    </div>
  );
};

export default LevelUp;
