import * as React from 'react';
import { ScrollView, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Avatar, ActivityIndicator } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

// Ensure the path to the image is correct
const initialAvatar = require('../assets/IMG_Tears_20210227_224009_processed.jpg');

const ProfileScreen = () => {
  const [avatar, setAvatar] = React.useState(initialAvatar);
  const [loading, setLoading] = React.useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setLoading(true);
      setAvatar({ uri: result.assets[0].uri });
    }
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={pickImage}>
          {loading ? (
            <ActivityIndicator animating={true} size="large" />
          ) : (
            <Avatar.Image 
              size={100} 
              source={avatar} 
              onLoad={handleImageLoad}
              style={styles.avatar}
            />
          )}
        </TouchableOpacity>
        <Text style={styles.name}>John Doe</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Email: john.doe@example.com</Text>
        <Text style={styles.infoText}>Phone: +1 234 567 890</Text>
        <Text style={styles.infoText}>DOB: 1990-01-01</Text>
        <Text style={styles.infoText}>Address: 123 Main St, Springfield, USA</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
  infoContainer: {
    marginTop: 20,
  },
  infoText: {
    fontSize: 20,
    marginBottom: 10,
    color: '#333333',
  },
  avatar: {
    backgroundColor: 'transparent',
  },
});

export default ProfileScreen;
