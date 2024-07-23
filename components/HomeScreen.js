import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, ActivityIndicator, View, Linking } from "react-native";
import {
  Avatar,
  Card,
  Paragraph,
  Button,
  Dialog,
  Portal,
  Provider,
} from "react-native-paper";
import QRCode from "react-native-qrcode-svg";
import carouselData from "../assets/carouselData.json";
import halloween from "../assets/enhanced_halloween.png";
import men from "../assets/men.webp";

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [qrValue, setQrValue] = useState("");

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

  const showDialog = (value) => {
    setQrValue(value);
    setVisible(true);
  };

  const hideDialog = () => setVisible(false);

  const openLink = (url) => {
    Linking.openURL(url);
  };

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <Provider>
      <ScrollView style={styles.scrollView}>
        {data.map((item, index) => (
          <Card key={item.id} style={styles.card}>
            <Card.Cover
              source={index === 0 ? halloween : men} // Use enhanced Halloween image for the first card
              style={styles.image}
            />
            <Card.Title
              title={item.text}
              left={(props) => (
                <Avatar.Icon {...props} icon="sale" style={{ backgroundColor: "#D32F2F" }} />
              )}
            />
            <Card.Content style={styles.cardContent}>
              <Paragraph>{item.des}</Paragraph>
            </Card.Content>
            <Card.Actions style={styles.cardActions}>
              <Button
                mode="contained"
                onPress={() => {
                  if (index === 0) {
                    openLink("https://www.target.com/c/halloween/-/N-5xt2o");
                  } else {
                    showDialog(`Reward QR Code for ${item.text}`);
                  }
                }}
                style={styles.button}
                color="#D32F2F"
              >
                {index === 0 ? `Get Discount` : `Get Rewards`}
              </Button>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>QR Code</Dialog.Title>
          <Dialog.Content>
            <View style={styles.qrCodeContainer}>
              <QRCode value={qrValue} size={200} />
            </View>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Close</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Provider>
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
    justifyContent: "flex-end", // Aligns the button to the right
  },
  button: {
    width: "40%", // Button width to make them larger and more tappable
    marginHorizontal: 5, // Adds horizontal space between buttons
  },
  qrCodeContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});

export default HomeScreen;
