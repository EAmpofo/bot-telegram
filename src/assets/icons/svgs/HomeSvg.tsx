import { SvgProps } from "../../../utils/interfaces/interface";

const HomeSvg: React.FC<SvgProps> = ({ width, height, className }) => {
  const svgWidth = `${width}px`;
  const svgHeight = `${height}px`;
  return (
    <svg
      className={className}
      width={svgWidth}
      height={svgHeight}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.9976 0.364014L7.10852 6.43012V0.62649H2.34692V10.0951V27.0733V29.9995H10.3621V15.8695H19.7592V29.9995H27.6484V9.90549L14.9976 0.364014Z"
        fill="#0ED4FF"
      />
      <path
        d="M14.9976 11.5342C16.516 11.5342 17.7469 10.3003 17.7469 8.77821C17.7469 7.25612 16.516 6.02222 14.9976 6.02222C13.4792 6.02222 12.2483 7.25612 12.2483 8.77821C12.2483 10.3003 13.4792 11.5342 14.9976 11.5342Z"
        fill="#C0FF0E"
      />
      <path
        d="M15.5794 0.451797L14.9976 -0.000244141L14.4157 0.451797L0 11.5924L0.43155 12.1611L14.9976 0.903839L29.5636 12.1611L30 11.5924L15.5794 0.451797Z"
        fill="#C0FF0E"
      />
    </svg>
  );
};

export default HomeSvg;
