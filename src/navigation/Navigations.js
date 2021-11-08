import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

import SplashScreen from "../screens/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import SignupScreen from "../screens/SignupScreen";
import ForgetPasswordScreen from "../screens/ForgetPasswordScreen";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import ShoppingCartIcon from "../components/ShoppingCartIcon";
import CartScreen from "../screens/CartScreen";
import OnboardingScreen from "../components/OnboardingScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const color = "#FFA500";
const Stack = createNativeStackNavigator();

const Navigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="onBoard" component={OnboardingScreen} />

        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={SignupScreen} />
        <Stack.Screen name="forgetPass" component={ForgetPasswordScreen} />

        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{
            title: "",
            headerShown: true,
            headerTintColor: color,

            headerRight: () => <ShoppingCartIcon />,
          }}
        />
        <Stack.Screen
          name="detail"
          component={DetailScreen}
          options={{
            title: "",
            headerShown: true,
            headerTintColor: color,
            headerRight: () => <ShoppingCartIcon />,
          }}
        />
        <Stack.Screen name="cart" component={CartScreen} />
        <Stack.Screen name="welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;
