import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';  // Import icons from expo/vector-icons
import ProfileScreen from './ProfileScreen';
import LabWorksScreen from './LabWorksScreen';
import BodyScansScreen from './BodyScansScreen';
import MyHeader from './MyHeader'; 

import { getTabBarIcon } from '../utils/Utils'; 

const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
         
          return getTabBarIcon(route.name, color, size);
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

        header: ({ navigation, route, options }) => {
          
          return <MyHeader title={route.name} style={options.headerStyle} />;
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
