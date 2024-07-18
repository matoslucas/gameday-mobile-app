import React from "react";
import { FontAwesome6, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";

export const getTabBarIcon = (routeName, color, size) => {
  const iconStyle = {
    marginTop: 5,
    marginBottom: 5,
  };

  switch (routeName) {
    case "Profile":
      return <FontAwesome6 name="user" color={color} size={size} style={iconStyle} />;
    case "Labs":
      return <MaterialCommunityIcons name="test-tube" color={color} size={size} style={iconStyle} />;
    case "Scans":
      return <FontAwesome6 name="chart-simple" color={color} size={size} style={iconStyle} />;
    case "Home":
      return <Octicons name="home" color={color} size={size} style={iconStyle} />;
    default:
      return null;  // Default case to handle any other routes
  }
};
