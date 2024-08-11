/* eslint-disable @typescript-eslint/no-explicit-any */
import AlienCard from "../shared/AlienCard";
import AppButton from "../shared/AppButton";
import "../../utils/styles/customStyle.css";
import { aliensBanner } from "../../assets/images/index";
import Swip from "../../assets/icons/Swip.png";
const WelcomeScreen = ({onStart}: {onStart: any}) => {
  const normalStyle = "font-[inter] text-[16px] font-normal";
  const content = (
    <div className="px-4 pb-4 rounded-b-[18px] bg-card-primary">
      <p className="text-[18px]">What can this bot do?</p>
      <p className={`${normalStyle} my-2`}>
        As the threat from Zorathia became imminent, nations across the globe
        realized that unity and collaboration were the keys to survival. This
        realization gave birth to The Lucidia Initiative. More than just a
        military strategy; it is a testament to the resilience and ingenuity of
        the human spirit.
      </p>
      <p className={`${normalStyle}`}>Collect tokens, improve your defense, save the world!</p>
    </div>
  );
  return (
    <div className="relative flex items-center welcomeScreen">
      <div className="mx-5">
        <AlienCard
          className="overflow-hidden rounded-t-[18px]"
          image={aliensBanner}
          content={content}
        />
      </div>
      <div className="absolute bottom-0 w-full">
        <div className="flex relative bg-primary-shade-black mx-auto item-center h-[45px] w-fit mb-1 justify-center px-2 rounded-lg">
          <div className="flex items-center gap-2">
            <img src={Swip} alt="Swip" className="w-4 h-4" />
            <p className={`${normalStyle} z-10`}>Tap here to use this bot</p>
          </div>
          <div className="absolute w-5 h-5 rotate-45 top-3/4 bg-primary-shade-black z-[]"></div>
        </div>
        <div className=" bg-black h-[87px] flex items-center justify-center">
          <AppButton
            text="Start"
            onClick={() => onStart()}
            className="flex items-center justify-center rounded-lg bg-primary-shade-blue h-[56px] py-[14px] px-[150px] text-[23px] font-medium"
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
