import { SvgProps } from "../../../utils/interfaces/interface";

const ArrowDown: React.FC<SvgProps> = ({ width, height, className }) => {
  const svgWidth = `${width}px`;
  const svgHeight = `${height}px`;
  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      className={className}
      viewBox="0 0 24 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.4117 -0.000104904L2.00739 -0.000104904C1.80081 0.000543594 1.59831 0.0575199 1.4217 0.164692C1.24509 0.271864 1.10105 0.425173 1.00509 0.608116C0.90913 0.791061 0.864878 0.996714 0.877102 1.20294C0.889326 1.40916 0.95756 1.60814 1.07446 1.77847L11.2766 16.5149C11.6994 17.1259 12.7174 17.1259 13.1413 16.5149L23.3435 1.77847C23.4616 1.6085 23.5308 1.40941 23.5437 1.20285C23.5566 0.996281 23.5126 0.790133 23.4166 0.606802C23.3205 0.42347 23.1761 0.269964 22.9989 0.162968C22.8217 0.0559692 22.6186 -0.000431061 22.4117 -0.000104904Z"
        fill="#7700FF"
      />
    </svg>
  );
};

export default ArrowDown;
