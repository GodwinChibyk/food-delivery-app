import React from "react";
import Svg, { Path } from "react-native-svg";

const MenuIcon = ({ color, width, height }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={`${height} px`}
      viewBox="0 0 24 24"
      width={`${width} px`}
      fill={color}
    >
      <Path d="M0 0h24v24H0V0z" fill="none" />
      <Path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </Svg>
  );
};

export default MenuIcon;
