import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  Dimensions,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Login";
import SignupScreen from "./src/screens/SignupScreen";
import ForgetPasswordScreen from "./src/screens/ForgetPasswordScreen";
import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen";
import * as firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  try {
    firebase.initializeApp(firebaseConfig);
  } catch (err) {
    console.log(err);
  }
}
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen
            name="signup"
            component={SignupScreen}
            initialParams={{ itemId: 42 }}
          />
          <Stack.Screen name="forgetPass" component={ForgetPasswordScreen} />
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    flex: 1,
    justifyContent: "flex-end",
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 70,
  },
  container: {
    flex: 1,
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#f0fc",
  },
});
