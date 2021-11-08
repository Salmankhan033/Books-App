import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as firebase from "firebase";
import { firebaseConfig } from "./config";
import { Provider } from "react-redux";
import { store } from "./src/state/store";

import Navigations from "./src/navigation/Navigations";

if (!firebase.apps.length) {
  try {
    firebase.initializeApp(firebaseConfig);
  } catch (err) {
    console.log(err);
  }
}
const Stack = createNativeStackNavigator();
export default function App() {
  // const [user, setuser] = useState('');
  // useEffect(() => {
  //   auth().onAuthStateChanged(userExist => {
  //     if (userExist) {
  //       setuser(userExist)

  //     }

  // }, [])
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navigations />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
