/* eslint-disable @typescript-eslint/no-explicit-any */

import GameHomeScreen from "../../../components/game/GameHomeScreen";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Reward from "../../../components/game/Reward";
import RewardReceived from "../../../components/game/RewardRecieved";
import { useSelector } from "react-redux";
import { useState } from "react";
import "../../../utils/styles/customStyle.css";

const GameHome = () => {
  const { tutorialFinished } = useSelector((state: any) => state.user);
  const [currentScreen, setCurrentScreen] = useState(
    tutorialFinished ? "reward" : "gameHome"
  );
  const handleReceiveReward = () => {
    setCurrentScreen("rewardReceived");
  };

  const handleCloseRewardReceived = () => {
    setCurrentScreen("gameHome");
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "reward":
        return <Reward onReceive={handleReceiveReward} />;
      case "rewardReceived":
        return <RewardReceived onClose={handleCloseRewardReceived} />;
      case "gameHome":
      default:
        return <GameHomeScreen />;
    }
  };
  return (
    <div className="game-home-container">
      <TransitionGroup>
        <CSSTransition key={currentScreen} timeout={300} classNames="fade">
          {renderScreen()}
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default GameHome;
