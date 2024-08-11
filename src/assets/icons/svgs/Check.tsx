import React from "react";
import { SvgProps } from "../../../utils/interfaces/interface";

const Check: React.FC<SvgProps> = ({ width, height, className }) => {
  const svgWidth = `${width}px`;
  const svgHeight = `${height}px`;
  return (
    <svg
      className={className}
      width={svgWidth}
      height={svgHeight}
      viewBox="0 0 23 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.04295 17.5L0 9.44179L2.01074 7.42724L8.04295 13.4709L20.9893 0.5L23 2.51455L8.04295 17.5Z"
        fill="white"
      />
    </svg>
  );
};

export default Check;
