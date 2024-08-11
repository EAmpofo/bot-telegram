import { biteBottom, EnergyBoost } from "../../assets/images";
import "../../utils/styles/customStyle.css";
import AppButton from "./AppButton";
import UfoOverlay from "./UfoOverlay";
import { phases } from "../../utils/helpers/helper";
import CaretRight from "../../assets/icons/CaretRight.png";
import SkipTutorialCard from "./SkipTutorialCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { routerPaths } from "../../routes/Router";
import { useDispatch } from "react-redux";
import { setRewardValue, setTutorialFinished } from "../../store/slice/userSlice";
const BiteAlien = ({
  type,
  title,
  subTitle,
  bgImage,
  setCurrentPhase,
}: {
  type: string;
  title: string;
  subTitle: string;
  bgImage: string;
  setCurrentPhase: (phase: string) => void;
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSkipTutorial, setIsSkipTutorial] = useState(false);
  const handleOpenModal = () => {
    setIsSkipTutorial(true);
  };
  const hanndleConfirmSkip = () => {
    navigate(routerPaths.gameHome);
    dispatch(setTutorialFinished(false));
    dispatch(setRewardValue(0))
  };
  const handleCloseModal = () => {
    setIsSkipTutorial(false);
  };
  const handleFaceChange = () => {
    if (type === "onboarding") {
      setCurrentPhase("mission");
    } else if (type === "mission") {
      setCurrentPhase("millitary");
    } else if (type === "millitary") {
      setCurrentPhase("spike");
    }
  };
  const handleSkipOrPlay = () => {
    if (type === "spike") {
      navigate(routerPaths.gameHome);
      dispatch(setTutorialFinished(true));
      dispatch(setRewardValue(999))
    } else {
      handleOpenModal();
    }
  };
  return (
    <div className="relative bite h-[100vh] overflow-hidden flex flex-col justify-center items-center">
      <UfoOverlay />
      <div className="w-full text-center">
        <p className="text-primary-green text-[30px] font-medium w-[82%] mx-auto text-wrap">
          {title}
        </p>
        <p className="font-normal">{subTitle}</p>
      </div>
      <div className="relative">
        <div>
          <img src={bgImage} alt="bite alien" className="" />
        </div>
      </div>
      <div className="absolute bottom-0 h-[300px] w-full ">
        <div className="relative w-full h-full">
          {type === "onboarding" ? (
            <div className="relative z-50 flex flex-col items-center justify-center">
              <p className="pt-8 text-lg font-medium">Bite the alien!</p>
              <div className="flex items-center justify-center mt-[-10px]">
                <img src={EnergyBoost} className="object-cover" alt="" />
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="absolute inset-0">
            <img src={biteBottom} alt="overlay" className="w-full h-full" />
          </div>
          <div
            className={`absolute flex items-center justify-between w-full px-10 ${
              type !== "onboarding" ? "mt-[39%]" : "mt-10"
            } ${type === "spike" ? "flex-col-reverse gap-3 mt-52" : ""}`}
          >
            <AppButton
              className={`px-5 py-2 font-medium rounded-lg text-xl  bg-primary-shade-blue ${
                type === "spike" ? "w-full text-center" : "w-max"
              }`}
              onClick={() => handleSkipOrPlay()}
              text={type === "spike" ? "Play" : "Skip All"}
            />
            <div className={`flex gap-1 ${type === "spike" ? "" : "-ml-20"}`}>
              {phases.map((phase, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full bg-primary-shade-blue ${
                    phase === type ? "" : "opacity-50"
                  }`}
                ></div>
              ))}
            </div>
            {type !== "spike" ? (
              <AppButton
                className="px-5 py-2 font-medium rounded-lg w-max bg-primary-shade-blue"
                onClick={() => handleFaceChange()}
                icon={CaretRight}
                text=""
              />
            ) : (
              ""
            )}
          </div>
        </div>
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

export default BiteAlien;
