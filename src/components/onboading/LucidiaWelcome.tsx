import { useState } from "react";
import { ProceedBg, SkipBg } from "../../assets/images";
import "../../utils/styles/customStyle.css";
import ButtonWithBackground from "../shared/ButtonWithBackground";
import UfoOverlay from "../shared/UfoOverlay";
import SkipTutorialCard from "../shared/SkipTutorialCard";
import { useDispatch } from "react-redux";
import { setRewardValue, setTutorialFinished } from "../../store/slice/userSlice";
import { useNavigate } from "react-router-dom";
import { routerPaths } from "../../routes/Router";
import { flexClass } from "../../utils/helpers/helper";


const LucidiaWelcome = ({onProceed}: {onProceed: () => void}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSkipTutorial, setIsSkipTutorial] = useState(false);
  const handleOpenModal = () => {
    setIsSkipTutorial(true);
  };
  const hanndleConfirmSkip = () => {
    dispatch(setTutorialFinished(false));
    dispatch(setRewardValue(0))
    handleCloseModal()
    navigate(routerPaths.gameHome);
  };
  const handleCloseModal = () => {
    setIsSkipTutorial(false);
  };
  return (
    <div className="relative selectCountry h-[100vh]">
      <UfoOverlay />
      <div className={`${flexClass} !z-50 flex-col w-3/4 mx-auto pt-40 relative `}>
        <p className="text-xl font-medium text-primary-green">Welcome to the</p>
        <p className="mt-5 text-4xl font-bold leading-10 text-primary-green">
          Lucidia Alliance
        </p>
        <p className="mt-20 font-medium leading-10 text-[20px] w-[369px]">
          Welcome to Lucidia! Your gateway to earning tokens and exploring
          exciting in-game assets.
          Choose an option to get started:
        </p>
      </div>
      <div className={`${flexClass} absolute flex-col w-full gap-5 bottom-10`}>
        <ButtonWithBackground
          text="Proceed with Tutorial"
          description="(Earn 10,000 Tokens Bonus)"
          image={ProceedBg}
          className={`${flexClass} font-medium cursor-pointer w-[85%] py-1 rounded-lg`}
          onClick={() => onProceed()}
        />
        <ButtonWithBackground
          text="Skip"
          description="(No Bonus)"
          image={SkipBg}
          className={`${flexClass} font-medium cursor-pointer w-[85%] py-1 rounded-lg`}
          onClick={() => handleOpenModal()}
        />
      </div>
      <SkipTutorialCard
        isOpen={isSkipTutorial}
        message="If you skip the tutorial now you will lose the reward"
        onConfirm={hanndleConfirmSkip}
        onCancel={handleCloseModal}
      />
    </div>
  );
};

export default LucidiaWelcome;
