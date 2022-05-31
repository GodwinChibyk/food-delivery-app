import * as React from "react";
import { View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";
import tailwind from "tailwind-rn";
import colors from "../colors";

function ArrowDown({color, width, height}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={`${height} px`}
      viewBox="0 0 24 24"
      width={`${width} px`}
      fill={color}
    >
      <Path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
      <Path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
    </Svg>
  );
}

export default ArrowDown;
