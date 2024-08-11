import Check from "../../assets/icons/svgs/Check";
import { flexClass } from "../../utils/helpers/helper";

const AppAlert = () => {
  return (
    <div className={`${flexClass} absolute w-full top-2`}>
      <div className="h-16 flex border-2 border-primary-blue gap-5 rounded-lg w-[90%] items-center pl-4 bg-gradient-to-b from-[#010D1C] to-[#220039]">
        <Check className="" height="18" width="23" />
        <p className="font-medium">Success!</p>
      </div>
    </div>
  );
};

export default AppAlert;
