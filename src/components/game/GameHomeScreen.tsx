/* eslint-disable @typescript-eslint/no-explicit-any */
import { cover, flexBtwn, flexClass } from "../../utils/helpers/helper";
import { Alien, LevelUpBadge, Octagon } from "../../assets/images";

import { UfoVector } from "../../assets/images";

import BoltVector from "../../assets/icons/BoltVector.png";
import Boost from "../../assets/icons/Boost.png";
import { useNavigate } from "react-router-dom";
import { routerPaths } from "../../routes/Router";
import IconButton from "../shared/IconButton";
import HomeSvg from "../../assets/icons/svgs/HomeSvg";
import Gun from "../../assets/icons/svgs/Gun";
import MissionSvg from "../../assets/icons/svgs/MissionSvg";
import TroopSvg from "../../assets/icons/svgs/TroopSvg";
import { useSelector } from "react-redux";

import { useEffect, useState } from "react";
import AppAlert from "../shared/AppAlert";

import LevelUp from "../shared/LevelUp";
import Close from "../../assets/icons/svgs/Close";
import Progress from "../../assets/icons/svgs/Progress";

const GameHomeScreen = () => {
  const navigate = useNavigate();
  const { userCountry } = useSelector((state: any) => state.user);
  const { tutorialFinished, reward } = useSelector((state: any) => state.user);
  const [points, setPoints] = useState(reward);
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>(
    []
  );

  const pointToAdd = 3;
  const [showAlert, setShowAlert] = useState(false);
  const [showLevelUp, setShowLevelUp] = useState(true);

  const handleAnimationEnd = (id: number) => {
    setClicks((prevClicks) => prevClicks.filter((click) => click.id !== id));
  };

  const handleHomeRoute = () => {
    navigate(routerPaths.gameHome);
  };
  const handleDefenseRoute = () => {
    navigate(routerPaths.defense);
  };
  const handleMissionRoute = () => {
    navigate(routerPaths.missions);
  };
  const handleTroopsRoute = () => {
    navigate(routerPaths.troops);
  };

  const handleAlienClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${
      -y / 10
    }deg) rotateY(${x / 10}deg)`;
    setTimeout(() => {
      card.style.transform = "";
    }, 100);
    setPoints(points + pointToAdd);
    setClicks([...clicks, { id: Date.now(), x: e.pageX, y: e.pageY }]);
  };

  const handleCloseLevelUp = () => {
    setShowAlert(true);
    setShowLevelUp(false);

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };
  useEffect(() => {
    if (tutorialFinished) {
      setShowLevelUp(true);
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [tutorialFinished]);

  const progressWidthPercentage = Math.min((points / 1999) * 100, 100);
  const noTutorialProgress = Math.min((points / 999) * 100, 100);
  return (
    <div className="h-[100vh] relative">
      {showAlert && <AppAlert />}
      <div className="px-3 pt-4">
        <div className={`${flexBtwn}`}>
          <p className="font-medium text-[20px]">Username</p>
          <img
            src={userCountry?.flag}
            alt="flag"
            className={`${cover} w-[33px]`}
          />
        </div>
        <div className="mt-3 w-[85%]">
          <p className="font-normal">
            Your current level is displayed here, collect coins and increase
            your level
          </p>
        </div>
        <div className="mt-6">
          <p className="font-normal">
            Defense Level {tutorialFinished ? 1 : 0}
          </p>
          <div className={`flex items-center w-full`}>
            <div className="z-10">
              {tutorialFinished ? (
              
                <img src={LevelUpBadge} alt="badge-level" className="w-[83px]"  />
              ) : (
                <img
                  src={Octagon}
                  alt="Shape"
                  className={`${cover} h-[85px]`}
                />
              )}
            </div>
            <div className="ml-[-36px] relative">
              <div
                className="relative"
                style={{
                  width: `${
                    tutorialFinished
                      ? progressWidthPercentage
                      : noTutorialProgress
                  }%`,
                  background: "linear-gradient(0deg, #7700FF 0%, #7700FF 100%)",
                }}
              >
                <Progress height="44" width="360" className="" />
                <p className="absolute font-medium left-12 top-[20%]">
                  {points}/{reward ? 1999 : points}
                </p>
                <p className="absolute mt-2 text-sm font-normal w-28 left-8">
                  To the next level
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${flexClass} relative mt-2 z-40`}>
        <div
          className="relative cursor-pointer mt-9"
          onClick={handleAlienClick}
        >
          <img src={UfoVector} alt="ufo" className="w-full h-full" />
          <img
            src={Alien}
            alt="alien"
            className="absolute -top-8 left-28 w-[43%]"
          />
        </div>
      </div>

      <div
        className={`${flexClass}  justify-around absolute bottom-0 h-[87px] w-full bg-gradient-to-b from-[#010D1C] to-[#220038]`}
      >
        <IconButton
          flexClass={`${flexClass}`}
          icon={<HomeSvg width="30" height="30" />}
          onClick={handleHomeRoute}
          label="Home"
          textColor="text-primary-green"
          borderColor="border-primary-shade-blue"
          bgColor="bg-[#7700FF4D]"
          borderWidth="border-2"
        />
        <IconButton
          flexClass={`${flexClass}`}
          icon={<Gun width="44" height="29" />}
          onClick={handleDefenseRoute}
          label="Defense"
          textColor="text-primary-green"
          borderColor=""
          bgColor=""
        />
        <IconButton
          flexClass={`${flexClass}`}
          icon={<MissionSvg width="35" height="33" />}
          onClick={handleMissionRoute}
          label="Missions"
          textColor="text-primary-green"
          borderColor=""
          bgColor=""
        />
        <IconButton
          flexClass={`${flexClass}`}
          icon={<TroopSvg width="26" height="28" />}
          onClick={handleTroopsRoute}
          label="Troops"
          textColor="text-primary-green"
          borderColor=""
          bgColor=""
        />
      </div>
      <div className={`${flexBtwn} px-3 mt-3`}>
        <div className="flex flex-col">
          <div className="flex items-center">
            <div
              className={`${flexClass} w-[58px] h-[58px] rounded-full bg-primary-blue shadow-[0_0_30px_0_#7700FF]`}
            >
              <img src={BoltVector} alt="" className={`${cover} z-10`} />
            </div>
            <div
              className={`${flexClass}  bg-gradient-to-r from-primary-blue text-[23px] to-transparent w-[182px] h-[58px] rounded-full ml-[-55px]`}
            >
              <p className="ml-12 font-medium">999/999</p>
            </div>
          </div>
          <div>
            <p className="font-normal">Energy</p>
          </div>
        </div>
        <div>
          <img src={Boost} alt="boost" className=" mt-[-30px]" />
        </div>
      </div>

      {clicks.map((click) => (
        <div
          key={click.id}
          className="absolute z-50 text-5xl font-bold opacity-0 pointer-events-none text-primary-white"
          style={{
            top: `${click.y - 42}px`,
            left: `${click.x - 28}px`,
            animation: `float 1s ease-out`,
          }}
          onAnimationEnd={() => handleAnimationEnd(click.id)}
        >
          +{pointToAdd}
        </div>
      ))}
      {tutorialFinished ? (
        <div>
          {showLevelUp && (
            <LevelUp
              closeIcon={<Close height="36" width="36" />}
              className="w-[90%] h-[50%] rounded-3xl custom-shadow bg-gradient-to-b from-[#010D1C] to-[#220039]"
              imageIcon={<img src={LevelUpBadge} className="w-[40%]" />}
              title="Level up!"
              multitap="Multitap"
              multitapValue={`+1`}
              energy="Energy limit"
              energyValue={`+500`}
              onClose={() => handleCloseLevelUp()}
            />
          )}
        </div>
      ) : null}
    </div>
  );
};

export default GameHomeScreen;
