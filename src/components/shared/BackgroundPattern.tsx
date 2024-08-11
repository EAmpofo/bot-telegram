import React from "react";
import { patternProps } from "../../utils/interfaces/interface";

const BackgroundPattern: React.FC<patternProps> = ({ className, image }) => {
  return (
    <div className={`${className} absolute`}>
      {image}
    </div>
  );
};

export default BackgroundPattern;
