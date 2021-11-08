import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import Onboarding from "react-native-onboarding-swiper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LottieView from "lottie-react-native";
const color = "#FFA500";
const firstTime = async () => {
  await AsyncStorage.setItem("firstTime", JSON.stringify(true));
};
const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      //   SkipButtonComponent={Skip}
      //   NextButtonComponent={Next}
      //   DoneButtonComponent={Done}
      //   DotComponent={Dots}
      onSkip={() => {
        firstTime();
        navigation.navigate("welcome");
      }}
      onDone={() => {
        firstTime();
        navigation.navigate("welcome");
      }}
      pages={[
        {
          backgroundColor: color,
          image: (
            <LottieView
              source={require("../assets/reading-book.json")}
              style={styles.img}
              autoPlay
              loop={false}
            />
          ),
          title: "Welcome",
          subtitle:
            "Everything for comfortable reading / listening of your favorite books",
        },
        {
          backgroundColor: color,
          image: (
            <LottieView
              style={styles.img}
              source={require("../assets/woman.json")}
              autoPlay
              loop={false}
            />
          ),
          title: "Listen your books",
          subtitle:
            "Reading is the conversation,All books talk,But a good book listens as well.",
        },
        {
          backgroundColor: color,
          image: (
            <LottieView
              style={styles.img}
              source={require("../assets/book-search.json")}
              autoPlay
              loop={false}
            />
          ),
          title: "Search your favorite books",
          subtitle:
            "Read th best books first,or you may not have a chance to read them at all",
        },
      ]}
    />
  );
};
const styles = StyleSheet.create({
  img: {
    width: "70%",
    height: 300,
  },
});

export default OnboardingScreen;
