import { CSSTransition, TransitionGroup } from "react-transition-group";
import WelcomeScreen from "../../components/onboading/WelcomeScreen";
import LucidiaAlliance from "../../components/onboading/LucidiaAlliance";
import LucidiaWelcome from "../../components/onboading/LucidiaWelcome";
import SelectCountry from "../../components/onboading/SelectCountry";
import "../../utils/styles/customStyle.css";
import TutorialScreen from "./TutorialScreen";
import { useState } from "react";
const OnboardingScreen = () => {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    {
      component: <WelcomeScreen onStart={() => setCurrentScreen(1)} />,
    },
    {
      component: <LucidiaAlliance onTimeout={() => setCurrentScreen(2)} />,
    },
    {
      component: <SelectCountry onContinue={() => setCurrentScreen(3)} />,
    },
    {
      component: <LucidiaWelcome onProceed={() => setCurrentScreen(4)} />,
    },
    {
      component: <TutorialScreen />,
    },
  ];
  return (
    <div>
      <TransitionGroup>
        <CSSTransition key={currentScreen} timeout={300} classNames="fade">
          {screens[currentScreen].component}
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default OnboardingScreen;
