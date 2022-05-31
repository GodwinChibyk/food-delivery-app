import React from "react";
import { View, Text } from "react-native";
import Svg, { G, Path, Rect } from "react-native-svg";

const Bolt = ({color, width, height}) => {
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
        <Rect fill="none" height="24" width="24" />
      </G>
      <G>
        <Path d="M11,21h-1l1-7H7.5c-0.88,0-0.33-0.75-0.31-0.78C8.48,10.94,10.42,7.54,13.01,3h1l-1,7h3.51c0.4,0,0.62,0.19,0.4,0.66 C12.97,17.55,11,21,11,21z" />
      </G>
    </Svg>
  );
};

export default Bolt;