import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import * as firebase from "firebase";
const color = "#FFA500";
const ShoppingCartIcon = () => {
  const books = useSelector((state) => state.book);
  const navigation = useNavigation();
  return (
    <View
      style={[
        { padding: 5 },
        Platform.OS == "android" ? styles.iconContainer : null,
      ]}
    >
      <View
        style={{
          position: "absolute",
          height: 30,
          width: 30,
          borderRadius: 15,
          backgroundColor: "#FFA500",
          right: 15,
          bottom: 15,
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2000,
        }}
      >
        <Text
          style={{ color: "white", fontWeight: "bold" }}
          onPress={() => navigation.navigate("cart")}
        >
          {books.length}
        </Text>
      </View>
      <View style={styles.icons}>
        <Ionicons
          style={styles.logout}
          onPress={() => {
            firebase
              .auth()
              .signOut()
              .then(() => {
                navigation.navigate("login");
              })
              .catch((error) => {
                alert(error);
              });
          }}
          name="log-out-outline"
          size={30}
          color="#FFA500"
        />
        <Ionicons
          onPress={() => navigation.navigate("cart")}
          name="cart-outline"
          size={30}
          color="#FFA500"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    paddingLeft: 20,
    paddingTop: 10,
    marginRight: 5,
  },
  icons: {
    flexDirection: "row",
  },
  logout: {
    // margin: 50,
    marginRight: 30,
  },
});

export default ShoppingCartIcon;
