import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const SubscribeScreen = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleEmailChange = (text) => {
    setEmail(text);
    setIsValid(validateEmail(text));
  };

  const handleSubscribe = () => {
    if (isValid) {
      Alert.alert("Subscribed!", `You have successfully subscribed with ${email}`);
    } else {
      Alert.alert("Invalid email", "Please enter a valid email address ending with @gmail.com");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 80}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}>
        <Image
          style={styles.logo}
          source={require("../assets/little-lemon-logo-grey.png")}
          resizeMode="contain"
        />
        <Text style={styles.normalText}>
          Subscribe to our newsletter for our latest delicious new recipes!
        </Text>

        <TextInput
          style={styles.input}
          value={email}
          onChangeText={handleEmailChange}
          placeholder="Enter your email"
          keyboardType="email-address"
        />

        <Pressable
          onPress={handleSubscribe}
          style={[styles.button, !isValid && styles.disabledButton]}
          disabled={!isValid}
        >
          <Text style={styles.buttonText}>Subscribe</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const button = {
  fontSize: 22,
  padding: 10,
  marginVertical: 30,
  margin: 50,
  borderWidth: 2,
  borderRadius: 12,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  logo: {
    height: 150,
    width: 150,
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 50,
  },
  normalText: {
    textAlign: "center",
    fontSize: 18,
    color: "#2F4F4F",
    marginBottom: 20,
  },
  input: {
    height: 60,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
    borderColor: "#556B2F",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#33cc33",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: "#aaa",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
  },
});

export default SubscribeScreen;