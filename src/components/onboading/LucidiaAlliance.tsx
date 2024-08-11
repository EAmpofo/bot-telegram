import "../../utils/styles/customStyle.css";
import IconBox from "../shared/IconBox";
import Globe from "../../assets/icons/globe.png";
import Flight from "../../assets/icons/flight.png";
import Youtube from "../../assets/icons/youtube.png";
import Twitter from "../../assets/icons/twitter.png";
import UfoOverlay from "../shared/UfoOverlay";
import { CircularProgress } from "@mui/material";
import { useEffect } from "react";

const LucidiaAlliance = ({ onTimeout }: { onTimeout: () => void }) => {
  const globe = <img src={Globe} alt="globe" className="w-[28px] h-[28px]" />;

  const flight = (
    <img src={Flight} alt="flight" className="w-[23px] h-[23px]" />
  );
  const youtube = (
    <img src={Youtube} alt="youTube" className="w-[26px] h-[20px]" />
  );
  const twitter = (
    <img src={Twitter} alt="twitter" className="w-[26px] h-[20px]" />
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      onTimeout();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onTimeout]);
  return (
    <div className="allianceScreen relative h-[100vh] flex flex-col items-center">
      <UfoOverlay />
      <div className="absolute bottom-0 flex flex-col items-center gap-4 text-center">
        <CircularProgress className="!w-[130px] !h-[130px]" />
        <div className="font-normal  text-primary-green w-[148px] h-[152px] mb-12 text-center">
          <p className="text-[33px]">
            The <span className="font-[900] text-[44px]">Lucidia</span> Alliance
          </p>
        </div>
        <div>
          <p className="text-[33px] font-bold mb-4">Let's win together!</p>
        </div>
        <div>
          <p className="font-medium">Stay connected on our socials</p>
        </div>
        <div className="flex gap-4 mb-10">
          <IconBox
            icon={globe}
            className="w-[49px] h-[49px] bg-primary-blue rounded-full flex items-center justify-center"
          />
          <IconBox
            icon={flight}
            className="w-[49px] h-[49px] bg-primary-blue rounded-full flex items-center justify-center"
          />
          <IconBox
            icon={youtube}
            className="w-[49px] h-[49px] bg-primary-blue rounded-full flex items-center justify-center"
          />
          <IconBox
            icon={twitter}
            className="w-[49px] h-[49px] bg-primary-blue rounded-full flex items-center justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default LucidiaAlliance;
