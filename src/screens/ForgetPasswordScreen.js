import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import * as firebase from "firebase";
const color = "#FFA500";
const ForgetPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState();

  const resetPassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(function (user) {
        alert("Please check your email...");
        navigation.navigate("login");
      })
      .catch(function (e) {
        console.log(e);
        alert("Error:" + e);
      });
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "padding"}
      >
        <Image source={require("../assets/bookLogo.png")} style={styles.logo} />
        <Text style={styles.logtext}>Reset Password</Text>
        <TextInput
          placeholder="Enter Your Email..."
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TouchableOpacity style={styles.btn} onPress={() => resetPassword()}>
          <Text style={styles.logBtn}>Reset Password</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.touch}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.signupBtn}>Log in Screen</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    flex: 1,
  },

  logtext: {
    fontSize: 16,
    // color: "#55ba82",
    marginBottom: 20,
    alignSelf: "center",
    fontWeight: "bold",
    color: color,
  },
  input: {
    borderColor: color,
    borderWidth: 1,
    padding: 13,
    margin: 10,
    borderRadius: 60,
    paddingLeft: 20,
    color: color,
  },

  btn: {
    marginTop: 30,
    borderRadius: 60,
    width: 350,
    borderRadius: 50,
    paddingLeft: 20,
    backgroundColor: color,
    color: "#fff",
    alignSelf: "center",
    alignItems: "center",
    height: 45,
    justifyContent: "center",
  },
  logBtn: {
    color: "#fff",
    alignSelf: "center",
    textAlignVertical: "center",
    justifyContent: "center",
  },
  signupBtn: {
    color: "#fff",
  },
  touch: {
    alignItems: "center",
    marginTop: 10,
  },
  logo: {
    width: 300,
    height: 200,
    alignSelf: "center",
  },
});

export default ForgetPasswordScreen;
