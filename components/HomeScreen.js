import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import carouselData from "../assets/carouselData.json"; // Ensure the path is correct

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
      {data.map((item) => (
        <Card key={item.id} style={styles.card}>
          <Card.Cover source={{ uri: item.image }} style={styles.image} />
          <Card.Content style={styles.cardContent}>
            <Title>{item.text}</Title>
          </Card.Content>
          <Card.Actions style={styles.cardActions}>
            <Button mode="contained" onPress={() => {}} style={styles.button} color="#6200ee">Share</Button>
            <Button mode="contained" onPress={() => {}} style={styles.button} color="#6200ee">Explore</Button>
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
    overflow: 'hidden', // Ensures the image does not bleed outside the border radius
  },
  image: {
    height: 200,
    width: '100%', // Ensures the image covers the full width of the card
  },
  cardContent: {
    padding: 10, // Consistent padding inside the card
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Spreads the buttons out evenly
  },
  button: {
    width: '40%', // Button width to make them larger and more tappable
    marginHorizontal: 5, // Adds horizontal space between buttons
  },
});

export default HomeScreen;
