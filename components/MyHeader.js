import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { getTabBarIcon } from '../utils/Utils'; 

const MyHeader = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
     {getTabBarIcon(title, '#333', 20)}
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor: '#333333',
    padding: 10,
  },
  headerTitle: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default MyHeader;
