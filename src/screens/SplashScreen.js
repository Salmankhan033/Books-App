import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const color = "#FFA500";

const SplashScreen = ({ navigation }) => {
  const [isFirstLunch, setIsFirstLunch] = useState(null);
  useEffect(() => {
    AsyncStorage.getItem("firstTime", (err, value) => {
      if (err) {
        console.log(err);
      } else {
        setIsFirstLunch(JSON.parse(value)); // boolean false
        console.log("Value:" + value + "First:" + isFirstLunch);
      }
    });
  }, []);
  return (
    <LottieView
      style={{ backgroundColor: "#FFA500", flex: 1 }}
      source={require("../assets/book.json")}
      autoPlay
      loop={false}
      onAnimationFinish={() => {
        isFirstLunch ? navigation.push("welcome") : navigation.push("onBoard");
      }}
    />
  );
};

export default SplashScreen;
