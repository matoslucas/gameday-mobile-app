import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';  // Import icons from expo/vector-icons
import ProfileScreen from './ProfileScreen';
import LabWorksScreen from './LabWorksScreen';
import BodyScansScreen from './BodyScansScreen';

const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          size = 30; // Set the size of the icons here

          const iconStyle = {
            marginTop: 5,
            marginBottom: 5,
          };

          if (route.name === 'Profile') {
            iconName = 'user';
            return <FontAwesome6 name={iconName} color={color} size={size} style={iconStyle} />;
          } else if (route.name === 'Labs') {
            iconName = 'test-tube';
            return <MaterialCommunityIcons name={iconName} color={color} size={size} style={iconStyle} />;
          } else if (route.name === 'Scans') {
            iconName = 'chart-simple';
            return <FontAwesome6 name={iconName} color={color} size={size} style={iconStyle} />;
          }
        },
        tabBarActiveTintColor: '#D32F2F',
        tabBarInactiveTintColor: '#333333',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          paddingBottom: 10,
          paddingTop: 10,
          height: 90, // Increase the height to match the icon size
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
      })}
    >
      <BottomTab.Screen name="Profile" component={ProfileScreen} />
      <BottomTab.Screen name="Labs" component={LabWorksScreen} />
      <BottomTab.Screen name="Scans" component={BodyScansScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;
