import React from "react";
import { SvgProps } from "../../../utils/interfaces/interface";

const Progress: React.FC<SvgProps> = ({ width, height, className }) => {
  const svgWidth = `${width}px`;
  const svgHeight = `${height}px`;
  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      className={className}
      viewBox="0 0 361 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.9375 1.5H26.3971L25.9809 1.84465L4.04336 20.009L2.74089 21.0875L3.96701 22.252L25.9045 43.0876L26.3387 43.5H26.9375H339.59H340.318L340.768 42.9281L357.178 22.0925L358.035 21.005L357.02 20.0642L337.418 1.89978L336.987 1.5H336.399H26.9375Z"
        stroke="url(#paint0_linear_2_9215)"
        stroke-width="3"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2_9215"
          x1="5"
          y1="22.5"
          x2="356"
          y2="22.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#7700FF" />
          <stop offset="0.525" stop-color="white" />
          <stop offset="1" stop-color="#7700FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Progress;
