import React from "react";
import Svg, { Path } from "react-native-svg";

const HomeIcon = ({ color, width, height }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={`${height} px`}
      viewBox="0 0 24 24"
      width={`${width} px`}
      fill={color}
    >
      <Path d="M0 0h24v24H0V0z" fill="none" />
      <Path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
    </Svg>
  );
};

export default HomeIcon;
