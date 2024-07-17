import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { DataTable } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import scanData from '../assets/scanData.json'; // Import the JSON file

const BodyScansScreen = () => {
  const [activeSections, setActiveSections] = React.useState([]);

  const toggleSection = (index) => {
    const isActive = activeSections.includes(index);
    setActiveSections((prevSections) =>
      isActive ? prevSections.filter((i) => i !== index) : [...prevSections, index]
    );
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert timestamp to milliseconds
    return date.toLocaleDateString();
  };

  if (!scanData || scanData.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No scan data available.</Text>
      </View>
    );
  }


  return (
    <ScrollView style={styles.container}>
      {scanData.map((section, index) => (
        <View key={index}>
          <TouchableOpacity onPress={() => toggleSection(index)} style={styles.header}>
            <View style={styles.headerContent}>
              <FontAwesome5 name="file-medical" size={20} color="#FFFFFF" style={styles.icon} />
              <Text style={styles.headerText}>Scan Date: {formatDate(section.received_date)}</Text>
            </View>
            <Icon
              name={activeSections.includes(index) ? 'expand-less' : 'expand-more'}
              size={24}
              color="#FFFFFF"
            />
          </TouchableOpacity>
          <Collapsible collapsed={!activeSections.includes(index)}>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Parameter</DataTable.Title>
                <DataTable.Title>Value</DataTable.Title>
              </DataTable.Header>
              <DataTable.Row>
                <DataTable.Cell>Weight</DataTable.Cell>
                <DataTable.Cell>{section.weight}</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Lean Body Mass</DataTable.Cell>
                <DataTable.Cell>{section.lbm_quantity}</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Skeletal Muscle Mass</DataTable.Cell>
                <DataTable.Cell>{section.bone_slim}</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Fat Mass</DataTable.Cell>
                <DataTable.Cell>{section.mbf_quantity}</DataTable.Cell>
              </DataTable.Row>
            </DataTable>
          </Collapsible>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#0288D1',
    borderRadius: 5,
    marginBottom: 5,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  headerText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default BodyScansScreen;
