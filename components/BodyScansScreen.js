import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { DataTable } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import scanData from '../assets/scanData.json';
import { LineChart } from 'react-native-chart-kit';

const BodyScansScreen = () => {
  const [activeSections, setActiveSections] = React.useState([]);
  
  const toggleSection = (index) => {
    const isActive = activeSections.includes(index);
    setActiveSections((prevSections) =>
      isActive ? prevSections.filter((i) => i !== index) : [...prevSections, index]
    );
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString();
  };

  if (!scanData || scanData.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No scan data available.</Text>
      </View>
    );
  }

  const chartData = {
    labels: scanData.slice(0, 5).map((section) => formatDate(section.received_date)),
    datasets: [
      {
        data: scanData.slice(0, 5).map((section) => section.weight),
        color: () => 'rgba(255, 99, 132, 1)', // Red
        strokeWidth: 2,
        label: 'Weight',
      },
      {
        data: scanData.slice(0, 5).map((section) => section.lbm_quantity),
        color: () => 'rgba(54, 162, 235, 1)', // Blue
        strokeWidth: 2,
        label: 'Lean Body Mass',
      },
      {
        data: scanData.slice(0, 5).map((section) => section.bone_slim),
        color: () => 'rgba(75, 192, 192, 1)', // Aqua
        strokeWidth: 2,
        label: 'Skeletal Muscle Mass',
      },
      {
        data: scanData.slice(0, 5).map((section) => section.mbf_quantity),
        color: () => 'rgba(255, 205, 86, 1)', // Yellow
        strokeWidth: 2,
        label: 'Fat Mass',
      },
    ],
    legend: ['Weight', 'Lean M', 'Skeletal M', 'Fat Mass'],
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.chartTitle}>Progress</Text>
      <LineChart
        data={chartData}
        width={Dimensions.get('window').width - 32}
        height={220}
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#fff',
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        bezier
        withLegend
      />

      {scanData.slice(0, 5).map((section, index) => (
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
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
});

export default BodyScansScreen;
