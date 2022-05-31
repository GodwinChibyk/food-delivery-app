import React from "react";

export const isReadyRedy = React.createRef();
export const navigationRef = React.createRef();

export async function navigate(name, params) {
  if (isReadyRedy.current && navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
}

export async function goBack() {
  if (isReadyRedy.current && navigationRef.current) {
    try {
      navigationRef.current.goBack();
    } catch (e) {
      navigationRef.current.navigate("Home");
    }
  }
}

export function addNavEvent(event, cb) {
  if (navigationRef.current) {
    navigationRef.current.addListener(event, cb);
  }
}