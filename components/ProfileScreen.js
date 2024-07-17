import * as React from 'react';
import { ScrollView, Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

const ProfileScreen = () => {
  const [avatar, setAvatar] = React.useState('https://via.placeholder.com/150');

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={pickImage}>
          <Avatar.Image 
            size={100} 
            source={{ uri: avatar }} 
          />
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
});

export default ProfileScreen;
