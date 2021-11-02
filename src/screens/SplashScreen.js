import React from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";

const SplashScreen = ({ navigation }) => {
  return (
    <LottieView
      source={require("../assets/book.json")}
      autoPlay
      loop={false}
      onAnimationFinish={() => navigation.push("login")}
    />
  );
};

export default SplashScreen;
