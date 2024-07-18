import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import {
  Avatar,
  Card,
  Title,
  Paragraph,
  Button,
  Text,
} from "react-native-paper";
import carouselData from "../assets/carouselData.json";
import halloween from "../assets/enhanced_halloween.png";
import men from "../assets/men.webp";

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulating a fetch call
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate fetch delay
        setData(carouselData);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <ScrollView style={styles.scrollView}>
      {data.map((item, index) => (
        <Card key={item.id} style={styles.card}>
          <Card.Cover
            source={index === 0 ? halloween : men} // Use enhanced Halloween image for the first card
            style={styles.image}
          />
          <Card.Title
            title={item.text}
            left={(props) => <Avatar.Icon {...props} icon="sale" style={{ backgroundColor: '#D32F2F' }}  />}
          />
          <Card.Content style={styles.cardContent}>
            <Paragraph>{item.des}</Paragraph>
          </Card.Content>
          <Card.Actions style={styles.cardActions}>
            
            <Button
              mode="contained"
              onPress={() => {}}
              style={styles.button}
              color="#D32F2F"
            >
              Get Dsicount
            </Button>
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  card: {
    margin: 10,
    borderRadius: 8, // Rounded corners
    overflow: "hidden", // Ensures the image does not bleed outside the border radius
  },
  image: {
    height: 200,
    width: "100%", // Ensures the image covers the full width of the card
  },
  cardContent: {
    padding: 10, // Consistent padding inside the card
  },
  cardActions: {
    flexDirection: "row",
    justifyContent: "space-around", // Spreads the buttons out evenly
  },
  button: {
    width: "40%", // Button width to make them larger and more tappable
    marginHorizontal: 5, // Adds horizontal space between buttons
  },
});

export default HomeScreen;
