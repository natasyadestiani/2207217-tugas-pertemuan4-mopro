import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/little-lemon-logo.png')} 
        style={styles.logo} 
        resizeMode="contain"
      />
      <Text style={styles.welcomeText}>Little Lemon, your local Mediterranean Bistro</Text>
      <Pressable 
        onPress={() => navigation.navigate('Subscribe')} 
        style={styles.button}
      >
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: '100%',
    height: 200,
    marginBottom: 50,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: -250,
  },
  button: {
    backgroundColor: '#33cc33',
    padding: 12,
    borderRadius: 9,
    marginTop: 500,
    width: '100%',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});

export default WelcomeScreen;