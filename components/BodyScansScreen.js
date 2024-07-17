import * as React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const BodyScansScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Scan 1: Height - 180 cm, Weight - 75 kg</Text>
      <Text style={styles.text}>Scan 2: Height - 180 cm, Weight - 76 kg</Text>
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

export default BodyScansScreen;
