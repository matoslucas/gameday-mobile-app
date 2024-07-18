import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Collapsible from "react-native-collapsible";
import { DataTable, List, Divider, Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import labWorkData from "../assets/labWorkData.json"; // Import the JSON file

const LabWorksScreen = () => {
  const [activeSections, setActiveSections] = React.useState([]);

  const toggleSection = (index) => {
    const isActive = activeSections.includes(index);
    setActiveSections((prevSections) =>
      isActive
        ? prevSections.filter((i) => i !== index)
        : [...prevSections, index]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <List.Section>
       
        <List.Item
          left={() => (
            <Avatar.Icon style={styles.avatar} icon="arm-flex" size={60} />
          )}
          right={() => <AntDesign name={"up-square-o"}  size={60} />}
          title={({ ellipsizeMode, color: titleColor, fontSize }) => (
            <View style={styles.headerContent}>
              <Text
                ellipsizeMode={ellipsizeMode}
                variant="bodyMedium"
                style={{ color: titleColor, fontSize, marginRight: 4 }}
              >
                Testosterone:
              </Text>
              <Text
                style={{ color: titleColor, fontSize, fontWeight: 700 }}
                variant="bodyLarge"
              >
                596
              </Text>
              <Text
                ellipsizeMode={ellipsizeMode}
                variant="bodyMedium"
                style={{ color: titleColor, fontSize, marginLeft: 4 }}
              >
                ng/dl
              </Text>
            </View>
          )}
          description="Ref: (264-916 ng/dl)"
        />
        <List.Item
          left={() => (
            <Avatar.Icon style={styles.avatar} icon="virus-outline" size={60} />
          )}
          right={() => <AntDesign name={"down-square-o"}  size={60} />}
          title={({ ellipsizeMode, color: titleColor, fontSize }) => (
            <View style={styles.headerContent}>
              <Text
                ellipsizeMode={ellipsizeMode}
                variant="bodyMedium"
                style={{ color: titleColor, fontSize, marginRight: 4 }}
              >
                Estradiol:
              </Text>
              <Text
                style={{ color: titleColor, fontSize, fontWeight: 700 }}
                variant="bodyLarge"
              >
                12.2
              </Text>
              <Text
                ellipsizeMode={ellipsizeMode}
                variant="bodyMedium"
                style={{ color: titleColor, fontSize, marginLeft: 4 }}
              >
                pg/ml
              </Text>
            </View>
          )}
          description="Ref: (7.6-42.6 pg/ml)"
        />


<List.Item
          left={() => (
            <Avatar.Icon style={styles.avatar}  icon={() => <FontAwesome5 name="heartbeat" size={40} color="#FFFFFF" />} 
           size={60} />
          )}
          right={() => <AntDesign name={"down-square-o"}  size={60} />}
          title={({ ellipsizeMode, color: titleColor, fontSize }) => (
            <View style={styles.headerContent}>
              <Text
                ellipsizeMode={ellipsizeMode}
                variant="bodyMedium"
                style={{ color: titleColor, fontSize, marginRight: 4 }}
              >
                Choresterol:
              </Text>
              <Text
                style={{ color: titleColor, fontSize, fontWeight: 700 }}
                variant="bodyLarge"
              >
                167
              </Text>
              <Text
                ellipsizeMode={ellipsizeMode}
                variant="bodyMedium"
                style={{ color: titleColor, fontSize, marginLeft: 4 }}
              >
                pg/ml
              </Text>
            </View>
          )}
          description="Ref: (100-199 mg/dl)"
        />

      </List.Section>

      <Divider />

      {labWorkData.map((section, index) => (
        <View key={index}>
          <TouchableOpacity
            onPress={() => toggleSection(index)}
            style={styles.header}
          >
            <View style={styles.headerContent}>
              <FontAwesome5
                name="file-medical"
                size={20}
                color="#FFFFFF"
                style={styles.icon}
              />
              <Text style={styles.headerText}>
                Date Collected: {section.date}
              </Text>
            </View>
            <Icon
              name={
                activeSections.includes(index) ? "expand-less" : "expand-more"
              }
              size={24}
              color="#FFFFFF"
            />
          </TouchableOpacity>
          <Collapsible collapsed={!activeSections.includes(index)}>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Test</DataTable.Title>
                <DataTable.Title>Result</DataTable.Title>
                <DataTable.Title>Reference</DataTable.Title>
              </DataTable.Header>
              {section.items.map((item, itemIndex) => (
                <DataTable.Row key={itemIndex}>
                  <DataTable.Cell>{item.test}</DataTable.Cell>
                  <DataTable.Cell>{item.result}</DataTable.Cell>
                  <DataTable.Cell>{item.reference}</DataTable.Cell>
                </DataTable.Row>
              ))}
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#D32F2F",
    borderRadius: 5,
    marginBottom: 5,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  headerText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  avatar: {
    backgroundColor: "#333",
  },
});

export default LabWorksScreen;
