import "../../utils/styles/customStyle.css";
import { CornFirmBackground } from "../../assets/images";
import ButtonWithBackground from "../shared/ButtonWithBackground";
import CustomSelect from "../shared/CustomSelect";
import UfoOverlay from "../shared/UfoOverlay";
import { flexClass } from "../../utils/helpers/helper";

const SelectCountry = ({onContinue} : {onContinue: () => void}) => {
  return (
    <div className="relative selectCountry h-[100vh]">
      <UfoOverlay />
      <div className={`${flexClass} flex-col pt-40`}>
        <p className="text-2xl font-medium">Please select your country</p>
        <p className="font-[500px] text-shade-purple">
          You can change this later in the settings
        </p>
        <div>
        <CustomSelect/>
        </div>
      </div>
      <div className="absolute flex items-center justify-center w-full bottom-10">
        <ButtonWithBackground
          text="Confirm"
          image={CornFirmBackground}
          className="flex items-center font-medium text-xl justify-center w-[87%] h-[56px] rounded-lg"
          onClick={() => onContinue()}
          />
      </div>
    </div>
  );
};

export default SelectCountry;
