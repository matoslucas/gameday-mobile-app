import React from "react";
import { FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";

export const getTabBarIcon = (routeName, color, size) => {
  const iconStyle = {
    marginTop: 5,
    marginBottom: 5,
  };
  let iconName;

  if (routeName === "Profile") {
    iconName = "user";
    return (
      <FontAwesome6
        name={iconName}
        color={color}
        size={size}
        style={iconStyle}
      />
    );
  } else if (routeName === "Labs") {
    iconName = "test-tube";
    return (
      <MaterialCommunityIcons
        name={iconName}
        color={color}
        size={size}
        style={iconStyle}
      />
    );
  } else if (routeName === "Scans") {
    iconName = "chart-simple";
    return (
      <FontAwesome6
        name={iconName}
        color={color}
        size={size}
        style={iconStyle}
      />
    );
  }
  return null;
};
