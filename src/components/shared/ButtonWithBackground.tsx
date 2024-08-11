import React from "react";
import { buttonWithBgProps } from "../../utils/interfaces/interface";

const ButtonWithBackground: React.FC<buttonWithBgProps> = ({
  className,
  description,
  image,
  onClick,
  text,
}) => {
  return (
    <div
      className={`${className}`}
      style={{
        backgroundImage: `url(${image})`,
        objectFit: "cover",
        backgroundSize: "cover",
      }}
      onClick={onClick}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <p className="font-medium text-center text-white ">{text}</p>
        {description && (
          <p className="font-normal text-center text-white">{description}</p>
        )}
      </div>
    </div>
  );
};

export default ButtonWithBackground;
