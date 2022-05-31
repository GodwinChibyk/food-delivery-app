import React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowUp = ({color, width, height}) => {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    height={`${height} px`}
    viewBox="0 0 24 24"
    width={`${width} px`}
    fill={color}
  >
    <Path d="M0 0h24v24H0z"  fill="none" opacity=".87" />
    <Path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"  />
  </Svg>
  );
};

export default ArrowUp;
