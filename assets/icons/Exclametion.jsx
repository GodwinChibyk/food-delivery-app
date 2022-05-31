import React from "react";
import { View, Text } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

const Exclametion = ({color, width, height}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={`${height} px`}
      viewBox="0 0 24 24"
      width={`${width} px`}
      fill={color}
    >
      <Path d="M0 0h24v24H0V0z" fill="none" />
      <Circle cx="12" cy="19" r="2" />
      <Path d="M12 3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2z" />
    </Svg>
  );
};

export default Exclametion;
