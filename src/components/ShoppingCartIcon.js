import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

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
          backgroundColor: "rgba(95,197,123,0.8)",
          right: 15,
          bottom: 15,
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2000,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          {books.length}
        </Text>
      </View>
      <Ionicons
        onPress={() => navigation.navigate("cart")}
        name="cart-outline"
        size={24}
        color="black"
      />
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
});

export default ShoppingCartIcon;
