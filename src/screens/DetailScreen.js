import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  Dimensions,
} from "react-native";
import { fontSize, height, width } from "styled-system";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const DetailScreen = ({ route }) => {
  const { item } = route.params;

  console.log(item);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Book Details </Text>
      <Image
        source={{ uri: item.item.book_image }}
        style={styles.img}
        resizeMode="stretch"
      />
      <View style={styles.box}>
        <Text style={styles.title}>Book Title: {item.item.title}</Text>
        <Text style={styles.authortext}>Author: {item.item.author}</Text>
        <Text style={styles.authortext}>Price: {item.item.price}$</Text>
        <Text style={styles.description} numberOfLines={4}>
          Description: {item.item.description}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    alignItems: "center",
    flexDirection: "column",
  },
  box: {
    margin: 20,
  },
  img: {
    width: Dimensions.get("screen").height / 2,
    // const windowHeight = Dimensions.get('window').height;
    // height: windowHeight(30),
    width: 300,
    height: 300,

    //  alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
  description: { margin: 5, fontSize: 18 },
  authortext: { margin: 5, fontSize: 18 },
  header: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10,
  },
});

export default DetailScreen;
