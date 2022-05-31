import React from "react";
import { View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

const ArrowLeft = ({ color, width, height }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={`${height} px`}
      viewBox="0 0 24 24"
      width={`${width} px`}
      fill={color}
    >
      <Path d="M0 0h24v24H0V0z" fill="none" />
      <Path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
    </Svg>
  );
};

export default ArrowLeft;
