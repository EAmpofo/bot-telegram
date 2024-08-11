import React from "react";
import { SvgProps } from "../../../utils/interfaces/interface";

const MissionSvg: React.FC<SvgProps> = ({ width, height, className }) => {
  const svgWidth = `${width}px`;
  const svgHeight = `${height}px`;
  return (
    <svg
      className={className}
      width={svgWidth}
      height={svgHeight}
      viewBox="0 0 35 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.8702 32.4553C12.8361 32.4553 9.87008 31.5552 7.34727 29.869C4.82447 28.1827 2.85818 25.7859 1.69706 22.9818C0.535943 20.1776 0.232142 17.092 0.824076 14.1151C1.41601 11.1382 2.87709 8.40374 5.02256 6.25753C7.16803 4.11131 9.90152 2.64972 12.8774 2.05758C15.8532 1.46544 18.9378 1.76934 21.741 2.93087C24.5441 4.09239 26.9401 6.05936 28.6258 8.58305C30.3114 11.1067 31.2112 14.0738 31.2112 17.109C31.2014 21.1761 29.582 25.0738 26.7071 27.9496C23.8323 30.8255 19.9359 32.4455 15.8702 32.4553Z"
        fill="#C0FF0E"
      />
      <path
        d="M15.8699 2.2386C18.8112 2.2386 21.6864 3.11115 24.1319 4.74591C26.5774 6.38066 28.4833 8.70418 29.6086 11.4226C30.734 14.141 31.0281 17.1322 30.4539 20.0179C29.8798 22.9036 28.463 25.5541 26.3828 27.6342C24.3027 29.7144 21.6526 31.1307 18.7677 31.704C15.8828 32.2774 12.8928 31.9821 10.1757 30.8554C7.45865 29.7287 5.13662 27.8213 3.50331 25.3743C1.86999 22.9274 0.998766 20.0509 0.999812 17.1086C0.999812 15.1554 1.38448 13.2213 2.13184 11.4169C2.8792 9.61242 3.9746 7.97293 5.35549 6.59205C6.73638 5.21117 8.37569 4.11597 10.1798 3.36899C11.9839 2.62201 13.9174 2.2379 15.8699 2.2386ZM15.8699 1.24902C12.7312 1.24902 9.66287 2.1801 7.05308 3.92452C4.44328 5.66894 2.40919 8.14835 1.20803 11.0492C0.00687622 13.9501 -0.307401 17.1421 0.304943 20.2216C0.917288 23.3012 2.42875 26.1299 4.6482 28.3501C6.86765 30.5704 9.6954 32.0824 12.7739 32.6949C15.8523 33.3075 19.0432 32.9931 21.9431 31.7915C24.8429 30.5899 27.3215 28.5551 29.0653 25.9444C30.8091 23.3337 31.7399 20.2644 31.7399 17.1245C31.7399 12.9141 30.0679 8.87607 27.0917 5.89884C24.1155 2.92161 20.0789 1.24902 15.8699 1.24902Z"
        fill="#89AD07"
      />
      <path
        d="M15.87 28.4863C13.6203 28.4873 11.4208 27.821 9.54976 26.5714C7.67871 25.3219 6.22013 23.5453 5.35849 21.4665C4.49685 19.3876 4.27086 17.0998 4.70911 14.8925C5.14736 12.6851 6.23016 10.6574 7.82055 9.06569C9.41095 7.474 11.4375 6.38988 13.6439 5.95045C15.8502 5.51102 18.1373 5.73602 20.2159 6.597C22.2944 7.45797 24.071 8.91624 25.321 10.7874C26.5709 12.6585 27.2381 14.8584 27.2381 17.1089C27.2353 20.1246 26.0369 23.016 23.9057 25.149C21.7745 27.2819 18.8846 28.4821 15.87 28.4863Z"
        fill="#0ED4FF"
      />
      <path
        d="M15.87 28.4863C13.6203 28.4873 11.4208 27.821 9.54976 26.5714C7.67871 25.3219 6.22013 23.5453 5.35849 21.4665C4.49685 19.3876 4.27086 17.0998 4.70911 14.8925C5.14736 12.6851 6.23016 10.6574 7.82055 9.06569C9.41095 7.474 11.4375 6.38988 13.6439 5.95045C15.8502 5.51102 18.1373 5.73602 20.2159 6.597C22.2944 7.45797 24.071 8.91624 25.321 10.7874C26.5709 12.6585 27.2381 14.8584 27.2381 17.1089C27.2353 20.1246 26.0369 23.016 23.9057 25.149C21.7745 27.2819 18.8846 28.4821 15.87 28.4863ZM15.87 6.72102C13.8149 6.72102 11.806 7.3307 10.0973 8.47295C8.38864 9.6152 7.05699 11.2387 6.27079 13.1381C5.48459 15.0375 5.27915 17.1275 5.68046 19.1437C6.08177 21.1599 7.07181 23.0118 8.52533 24.4651C9.97886 25.9184 11.8306 26.9078 13.8463 27.3082C15.862 27.7087 17.9512 27.5021 19.8495 26.7147C21.7479 25.9272 23.3701 24.5943 24.5111 22.8844C25.6521 21.1746 26.2605 19.1647 26.2595 17.1089C26.2567 14.3538 25.161 11.7124 23.213 9.76478C21.2651 7.81713 18.6241 6.72242 15.87 6.72102Z"
        fill="#0ABACC"
      />
      <path
        d="M15.87 29.4705C13.4257 29.4715 11.036 28.7474 9.00317 27.3897C6.97031 26.032 5.38561 24.1018 4.4495 21.8431C3.51339 19.5843 3.26791 17.0987 3.74413 14.7004C4.22034 12.3021 5.39685 10.0989 7.12485 8.3696C8.85286 6.64026 11.0547 5.4624 13.452 4.98499C15.8492 4.50758 18.3341 4.75207 20.5925 5.68755C22.8508 6.62302 24.7811 8.20745 26.1391 10.2404C27.4972 12.2734 28.2221 14.6636 28.2221 17.1088C28.2193 20.3855 26.9172 23.5273 24.6015 25.8449C22.2858 28.1624 19.1456 29.4663 15.87 29.4705ZM15.87 5.73135C13.6203 5.73031 11.4209 6.39669 9.54981 7.64622C7.67876 8.89575 6.22018 10.6723 5.35854 12.7512C4.4969 14.83 4.27091 17.1178 4.70916 19.3252C5.14741 21.5325 6.23021 23.5603 7.8206 25.1519C9.411 26.7436 11.4375 27.8278 13.6439 28.2672C15.8503 28.7066 18.1374 28.4816 20.2159 27.6206C22.2945 26.7597 24.0711 25.3014 25.321 23.4303C26.571 21.5592 27.2382 19.3592 27.2382 17.1088C27.2354 14.0931 26.0369 11.2016 23.9057 9.06868C21.7746 6.93576 18.8847 5.73556 15.87 5.73135Z"
        fill="#0ABACC"
      />
      <path
        d="M15.8698 24.3845C14.431 24.3856 13.0242 23.9597 11.8273 23.1608C10.6305 22.362 9.69736 21.2259 9.14602 19.8965C8.59468 18.567 8.44988 17.1038 8.72994 15.692C9.01 14.2802 9.70234 12.9832 10.7194 11.9651C11.7364 10.9469 13.0325 10.2534 14.4436 9.97223C15.8547 9.69105 17.3174 9.83483 18.6469 10.3854C19.9763 10.936 21.1126 11.8686 21.9121 13.0653C22.7115 14.262 23.1383 15.669 23.1383 17.1083C23.1355 19.0363 22.369 20.8846 21.0066 22.2484C19.6443 23.6122 17.7972 24.3803 15.8698 24.3845Z"
        fill="#C0FF0E"
      />
      <path
        d="M15.8699 10.3242C17.2112 10.3242 18.5223 10.722 19.6376 11.4675C20.7528 12.2129 21.6221 13.2725 22.1354 14.5121C22.6487 15.7517 22.783 17.1158 22.5213 18.4318C22.2596 19.7478 21.6137 20.9566 20.6653 21.9054C19.7168 22.8541 18.5084 23.5003 17.1929 23.762C15.8774 24.0238 14.5138 23.8895 13.2746 23.376C12.0354 22.8625 10.9762 21.993 10.231 20.8773C9.48585 19.7617 9.08811 18.45 9.08811 17.1083C9.08811 15.309 9.80261 13.5834 11.0744 12.3112C12.3463 11.0389 14.0712 10.3242 15.8699 10.3242ZM15.8699 9.33987C14.3331 9.33568 12.8296 9.78773 11.5497 10.6388C10.2699 11.4898 9.27124 12.7016 8.68023 14.1207C8.08922 15.5399 7.93241 17.1025 8.22966 18.6108C8.5269 20.1191 9.26484 21.5053 10.35 22.5938C11.4352 23.6824 12.8189 24.4243 14.3259 24.7258C15.8329 25.0273 17.3954 24.8747 18.8156 24.2873C20.2358 23.7 21.4499 22.7043 22.3041 21.4263C23.1584 20.1484 23.6144 18.6456 23.6144 17.1083C23.6116 15.0525 22.7954 13.0814 21.3443 11.6257C19.8931 10.1701 17.9249 9.34826 15.8699 9.33987Z"
        fill="#89AD07"
      />
      <path
        d="M15.8697 20.352C15.2284 20.352 14.6014 20.1618 14.0681 19.8053C13.5349 19.4489 13.1192 18.9423 12.8738 18.3495C12.6284 17.7568 12.5641 17.1046 12.6893 16.4753C12.8144 15.846 13.1232 15.268 13.5767 14.8144C14.0302 14.3607 14.608 14.0518 15.2371 13.9266C15.8661 13.8014 16.5181 13.8657 17.1107 14.1112C17.7032 14.3567 18.2096 14.7725 18.566 15.3059C18.9223 15.8394 19.1125 16.4666 19.1125 17.1081C19.1111 17.968 18.769 18.7923 18.1611 19.4004C17.5533 20.0084 16.7293 20.3506 15.8697 20.352Z"
        fill="#89AD07"
      />
      <path
        d="M15.87 14.3573C16.4138 14.3584 16.9451 14.5206 17.3968 14.8236C17.8485 15.1266 18.2002 15.5568 18.4076 16.0597C18.615 16.5626 18.6687 17.1157 18.562 17.6491C18.4552 18.1826 18.1928 18.6724 17.8079 19.0567C17.423 19.441 16.9329 19.7026 16.3994 19.8083C15.8659 19.9141 15.3131 19.8593 14.8108 19.6508C14.3085 19.4424 13.8792 19.0897 13.5771 18.6373C13.2751 18.1849 13.1139 17.6531 13.1139 17.1091C13.1132 16.7471 13.1841 16.3885 13.3224 16.054C13.4607 15.7195 13.6638 15.4156 13.9199 15.1599C14.176 14.9041 14.4802 14.7016 14.8149 14.5638C15.1495 14.4261 15.5081 14.3559 15.87 14.3573ZM15.87 13.373C15.1313 13.373 14.4093 13.5922 13.7951 14.0027C13.1809 14.4132 12.7022 14.9967 12.4195 15.6794C12.1369 16.362 12.0629 17.1132 12.207 17.8379C12.3511 18.5627 12.7068 19.2283 13.2291 19.7508C13.7514 20.2733 14.4169 20.6292 15.1414 20.7733C15.8658 20.9175 16.6168 20.8435 17.2992 20.5607C17.9816 20.2779 18.5649 19.7991 18.9753 19.1847C19.3857 18.5703 19.6047 17.848 19.6047 17.1091C19.6033 16.1186 19.2094 15.1692 18.5093 14.4688C17.8092 13.7685 16.8601 13.3744 15.87 13.373Z"
        fill="#89AD07"
      />
      <path
        d="M31.121 6.30249H31.0046L29.1531 5.85797C29.0522 5.83375 28.9615 5.77822 28.8941 5.69933C28.8266 5.62044 28.7858 5.52223 28.7775 5.41875L28.6241 3.5137C28.617 3.43634 28.6286 3.3584 28.6581 3.28652C28.6876 3.21465 28.734 3.15097 28.7934 3.10093L31.687 0.629652C31.7764 0.551462 31.891 0.508233 32.0097 0.50794C32.0623 0.499957 32.1158 0.499957 32.1684 0.50794C32.2496 0.536455 32.3221 0.585582 32.3787 0.650515C32.4352 0.715448 32.474 0.793962 32.4911 0.878368L32.7926 2.33891L34.1892 2.86809C34.2675 2.90103 34.3368 2.95237 34.3912 3.01777C34.4455 3.08317 34.4833 3.16071 34.5013 3.24381C34.5169 3.3282 34.51 3.41523 34.4812 3.49608C34.4524 3.57693 34.4028 3.64873 34.3373 3.7042L31.4437 6.18077C31.3527 6.25626 31.2391 6.29911 31.121 6.30249Z"
        fill="#0ED4FF"
      />
      <path
        d="M34.9881 3.16452C34.9575 2.99613 34.8839 2.8385 34.7746 2.70687C34.6652 2.57523 34.5238 2.47404 34.3639 2.41308L33.2213 1.98444L32.9727 0.788493C32.9381 0.620437 32.8604 0.464267 32.7472 0.335311C32.6341 0.206355 32.4894 0.109044 32.3273 0.0529297C32.2253 0.0174058 32.1179 -0.000490317 32.0099 1.02158e-05C31.775 0.00086106 31.5481 0.0852723 31.3698 0.238143L28.4762 2.70942C28.3567 2.81035 28.2631 2.93845 28.2033 3.083C28.1434 3.22756 28.1191 3.38435 28.1323 3.54024L28.2857 5.44C28.2935 5.50699 28.3094 5.57276 28.3333 5.6358L15.5422 16.7486C15.4442 16.8344 15.3841 16.9555 15.3752 17.0854C15.3663 17.2153 15.4092 17.3435 15.4946 17.4419C15.5427 17.4938 15.6007 17.5355 15.6652 17.5646C15.7297 17.5937 15.7994 17.6095 15.8702 17.6112C15.996 17.613 16.1175 17.5656 16.2087 17.4789L29.0581 6.32374L30.9096 6.76825C30.9852 6.77604 31.0614 6.77604 31.137 6.76825C31.3723 6.76978 31.6 6.68507 31.7771 6.53012L34.6707 4.05884C34.7939 3.94801 34.8875 3.80816 34.9429 3.65198C34.9983 3.4958 35.0139 3.32824 34.9881 3.16452ZM31.1212 5.81043L29.9627 5.52996C30.012 5.48745 30.0524 5.43556 30.0815 5.37732C30.1106 5.31907 30.1279 5.25563 30.1323 5.19065C30.1367 5.12568 30.1282 5.06047 30.1073 4.99881C30.0863 4.93715 30.0534 4.88026 30.0103 4.83144C29.9682 4.78228 29.9168 4.74199 29.8591 4.71292C29.8013 4.68386 29.7383 4.66661 29.6738 4.66217C29.6093 4.65774 29.5445 4.66621 29.4833 4.6871C29.4221 4.70799 29.3656 4.74087 29.3173 4.78382L29.2274 4.8632L29.1163 3.46616L32.0099 0.989582L32.3643 2.72001L34.0148 3.34973L31.1212 5.81043Z"
        fill="#0ABACC"
      />
    </svg>
  );
};

export default MissionSvg;
