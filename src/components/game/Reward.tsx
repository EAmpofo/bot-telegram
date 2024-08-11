import { Coins, Octagon, ProceedBg, Spear } from "../../assets/images";
import ButtonWithBackground from "../shared/ButtonWithBackground";
import "../../utils/styles/customStyle.css";
import BackgroundPattern from "../shared/BackgroundPattern";
import { cover, flexClass } from "../../utils/helpers/helper";
import ArrowDown from "../../assets/icons/svgs/ArrowDown";
import Elements from "../../assets/icons/svgs/Elements";
const Reward = ({ onReceive }: { onReceive: () => void }) => {
  return (
    <div>
      <div className={`${flexClass} my-10`}>
        <p className="text-lg font-medium">Username</p>
      </div>
      <div>
        <p className="font-normal ml-7">Defense Level 0</p>
        <div className={`${flexClass}`}>
          <div className="z-10">
            <img src={Octagon} alt="Shape" className={`${cover} h-[90px]`} />
          </div>
          <div className="ml-[-27px] relative">
            <img src={Spear} alt="Spear" className="cover h-[40px]" />
            <p className="absolute font-normal left-8 top-[20%]">000/000</p>
          </div>
        </div>
        <div className={`${flexClass} flex-col mt-4`}>
          <p className="font-medium w-[188px] text-center">
            Pick up a present from{" "}
            <span className="text-primary-green">username</span>
          </p>
          <div className="mt-3">
            <ArrowDown width="24" height="17" />
          </div>
        </div>
        <div className={`${flexClass} mt-10`}>
          <div
            className={`h-[226px] rounded-[39px] w-[384px] bg-gradient-to-b from-[#010D1C] to-[#220039] custom-shadow  overflow-hidden`}
          >
            <div className={`${flexClass} flex-col shadow-lg relative`}>
              <img src={Coins} alt="reward" className={`${cover} relative z-20`} />
              
              <ButtonWithBackground
                className="w-[285px] h-[50px] rounded-lg mt-4 relative z-20"
                image={ProceedBg}
                onClick={() => onReceive()}
                text="Receive a gift"
              />
              <BackgroundPattern
                className="opacity-30"
                image={<Elements height="685" width="431"/>}
              />
              
            </div>
            <div></div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Reward;
