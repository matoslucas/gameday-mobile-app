import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';  // Import icons from expo/vector-icons
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

          if (route.name === 'Profile') {
            iconName = 'account';
          } else if (route.name === 'Lab Works') {
            iconName = 'test-tube';
          } else if (route.name === 'Body Scans') {
            iconName = 'image';
          }

          return <MaterialCommunityIcons name={iconName} color={color} size={size} />;
        },
        tabBarActiveTintColor: '#D32F2F',
        tabBarInactiveTintColor: '#333333',
        
      })}
    >
      <BottomTab.Screen name="Profile" component={ProfileScreen} />
      <BottomTab.Screen name="Lab Works" component={LabWorksScreen} />
      <BottomTab.Screen name="Body Scans" component={BodyScansScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;
