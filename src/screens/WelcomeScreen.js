import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
const color = "#FFA500";
const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/bookLogo.png")}
        style={styles.logo}
        resizeMode="center"
      />
      <Text style={styles.text}>Welcome to our new Book App</Text>
      <TouchableOpacity
        style={styles.login}
        onPress={() => navigation.navigate("login")}
      >
        <Text style={styles.logintxt}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signup}
        onPress={() => navigation.navigate("signup")}
      >
        <Text style={styles.logintxt} style={{ color: color }}>
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    marginBottom: 30,
  },
  login: {
    backgroundColor: color,
    width: "80%",
    padding: 15,
    borderRadius: 60,
    alignItems: "center",
  },
  signup: {
    width: "80%",
    padding: 15,
    borderRadius: 60,
    alignItems: "center",
    marginTop: 30,
    borderColor: color,
    borderWidth: 1,
  },
  logo: {
    width: 300,
    height: 300,
  },
  logintxt: {
    color: "white",
  },
});

export default WelcomeScreen;
