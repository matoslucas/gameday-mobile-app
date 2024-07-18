import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import carouselData from '../assets/carouselData.json';  // Ensure the path is correct

const HomeScreen = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Simulating a fetch call
                await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate fetch delay
                setData(carouselData);
                setIsLoading(false);
            } catch (error) {
                console.error('Failed to fetch data:', error);
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
                    <Card.Content>
                        <Title>{item.text}</Title>
                    </Card.Content>
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
    },
    image: {
        height: 200,  // You can adjust this as needed
    }
});

export default HomeScreen;
