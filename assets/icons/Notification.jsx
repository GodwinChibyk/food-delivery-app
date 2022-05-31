import React from "react";
import { View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

const Notification = ({ color, width, height }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={`${height} px`}
      viewBox="0 0 24 24"
      width={`${width} px`}
      fill={color}
    >
      <Path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
    </Svg>
  );
};

export default Notification;
