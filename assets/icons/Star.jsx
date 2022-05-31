import React from "react";
import { View, Text } from "react-native";
import Svg, { G, Polygon, Rect } from "react-native-svg";

const Star = ({color, width, height}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      height={`${height} px`}
      viewBox="0 0 24 24"
      width={`${width} px`}
      fill={color}
    >
      <G>
        <Rect fill="none" height="24" width="24" x="0" />
        <Polygon points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10" />
      </G>
    </Svg>
  );
};

export default Star;
