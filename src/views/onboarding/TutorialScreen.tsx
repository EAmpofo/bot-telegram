import { useState } from 'react'
import BiteAlien from '../../components/shared/BiteAlien';
import { BiteAliens, Millitary, Mission, Spike } from '../../assets/images';

const TutorialScreen = () => {
    const [currentFace, setCurrentFace] = useState("onboarding");

  const handleSetPhase = (phase: string) => {
    setCurrentFace(phase);
  }
  return (
    <div>
        {currentFace === "onboarding" ? (
          <BiteAlien
            type={"onboarding"}
            title={"Tap and earn coins"}
            subTitle={"You can use boosters and tricky strategies"}
            bgImage={BiteAliens}
            setCurrentPhase={handleSetPhase}
          />
        ) : currentFace === "mission" ? (
          <BiteAlien
            type={"mission"}
            title={"Upgrade your exchandge"}
            subTitle={"Use cards to boost your passive income"}
            bgImage={Mission}
            setCurrentPhase={handleSetPhase}
          />
        ) : currentFace === "millitary" ? (
          <BiteAlien
            type={"millitary"}
            title={"Invite friends and get bonuses together"}
            subTitle={"You and your friend will both receive coins"}
            bgImage={Millitary}
            setCurrentPhase={handleSetPhase}
          />
        ) : currentFace === "spike" ? (
          <BiteAlien
            type={"spike"}
            title={"Use coins to get an airdrop at token listing"}
            subTitle={"Don`t forget to invite your friends. Good luck!"}
            bgImage={Spike}
            setCurrentPhase={handleSetPhase}
          />
        ) : (
          ""
        )}
    </div>
  )
}

export default TutorialScreen