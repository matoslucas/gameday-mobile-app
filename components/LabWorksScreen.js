import * as React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const LabWorksScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Testosterone Level: 500 ng/dL</Text>
      <Text style={styles.text}>Cholesterol Level: 180 mg/dL</Text>
      <Text style={styles.text}>Blood Sugar Level: 90 mg/dL</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    color: '#333333',
  },
});

export default LabWorksScreen;
