import React from "react";
import { View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

const Remove = ({color, width, height}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={`${height} px`}
      viewBox="0 0 24 24"
      width={`${width} px`}
      fill={color}
    >
      <Path d="M0 0h24v24H0V0z" fill="none" />
      <Path d="M19 13H5v-2h14v2z" />
    </Svg>
  );
};

export default Remove;
