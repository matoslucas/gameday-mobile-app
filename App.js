import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Appbar, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaView, Image, StyleSheet, View, StatusBar, Platform } from 'react-native';
import BottomTabs from './components/BottomTabs';

const logo = { uri: 'https://gamedaymenshealth.com/wp-content/uploads/2022/03/GDMH_Vector-Logo_WHITE.webp' };

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#D32F2F',}}>
          <StatusBar backgroundColor="#D32F2F" barStyle="light-content" />
          <Appbar.Header style={styles.appbar}>
            <View style={styles.headerContainer}>
              <Image source={logo} style={styles.logo} />
            </View>
          </Appbar.Header>
          <BottomTabs />
        </SafeAreaView>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: '#D32F2F',
    justifyContent: 'center',
    marginBottom: 10, // Add space below the logo
    marginTop: 10
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 59, // Adjusted height to maintain aspect ratio
    
  },
});
