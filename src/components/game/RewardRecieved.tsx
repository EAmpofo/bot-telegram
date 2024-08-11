import { Alien, ProceedBg, LevelUpBadge, SpearWithBg } from "../../assets/images";
import ButtonWithBackground from "../shared/ButtonWithBackground";
import "../../utils/styles/customStyle.css";
import BackgroundPattern from "../shared/BackgroundPattern";
import { cover, flexClass } from "../../utils/helpers/helper";
import ArrowDown from "../../assets/icons/svgs/ArrowDown";
import Elements from "../../assets/icons/svgs/Elements";

const RewardReceived = ({ onClose }: { onClose: () => void }) => {
  return (
    <div>
      <div className={`${flexClass} my-10`}>
        <p className="text-lg font-medium">Username</p>
      </div>
      <div>
        <p className="font-normal ml-7">Defense Level 1</p>
        <div className={`${flexClass}`}>
          <div className="z-10">
            <img src={LevelUpBadge} alt="badge" className="h-[90px]" />
          </div>
          <div className="ml-[-27px] relative">
            <img src={SpearWithBg} alt="Spear" className="cover h-[40px] overflow-hidden" />
            <p className="absolute font-medium left-10 top-[20%]">999/999</p>
          </div>
        </div>
        <div className={`${flexClass} flex-col mt-6`}>
          <p className="font-medium w-[188px] text-center">Tap to start </p>
          <div className="mt-3">
            <ArrowDown width="24" height="17" />
          </div>
        </div>
        <div className={`${flexClass} mt-10`}>
          <div
            className={`h-[226px] rounded-[39px] w-[384px] bg-gradient-to-b from-[#010D1C] to-[#220039] custom-shadow  overflow-hidden`}
          >
            <div className={`${flexClass} flex-col shadow-lg relative`}>
              <img
                src={Alien}
                alt="reward"
                className={`${cover} relative z-20 w-[65px]`}
              />
              <ButtonWithBackground
                className="w-[285px] h-[50px] rounded-lg mt-4 relative z-20 font-medium"
                image={ProceedBg}
                onClick={() => onClose()}
                text="Start defense"
              />
              
              <BackgroundPattern
                className="opacity-30"
                image={<Elements height="685" width="431"/>}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardReceived;
