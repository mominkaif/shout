import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
} from "react-native";
import { useFonts } from "expo-font";
import React, { useState, useEffect } from "react";
import { FIREBASE_AUTH } from "../../firebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const WelcomeScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const [fontsLoaded] = useFonts({
    Red_Hat_Display: require("../assets/font/Red_Hat_Display/RedHatDisplay-Light.ttf"),
  });

  useEffect(() => {
    if (!fontsLoaded) {
      return;
    }
  }, [fontsLoaded]);

  const login = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
      alert("Login failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      alert("Check you email!");
    } catch (error) {
      console.log(error);
      alert("Sign up failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.primaryText}>welcome to {"\n"}shout!</Text>
      <View>
        <TextInput
          value={email}
          style={styles.input}
          placeholder="email"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
        <TextInput
          secureTextEntry={true}
          value={password}
          style={styles.input}
          placeholder="password"
          autoCapitalize="none"
          onChange={(text) => setPassword(text)}
        ></TextInput>

        {loading ? (
          <ActivityIndicator size="large" color="red" style={styles.input} />
        ) : (
          <>
            <Button title="Login" onPress={() => login()} />
            <Button title="Sign Up" onPress={() => signUp()} />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    fontFamily: "Red_Hat_Display",
  },
  primaryText: {
    fontSize: 50,
    color: "#fff",
  },
  input: {
    marginVertical: 4,
    height: 50,
    width: "50%",
    borderRadius: 15,
    padding: 10,
    backgroundColor: "#484C57",
    alignContent: "center",
  },
  button: {
    width: "25%",
    height: 50,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#484C57",
  },
});

export default WelcomeScreen;
