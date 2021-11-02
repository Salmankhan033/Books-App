import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

const DetailScreen = ({ route }) => {
  const item = route.params.itemData;
  const books = useSelector((state) => state.book);
  // console.log(books);
  const dispatch = useDispatch();
  const { addBook } = bindActionCreators(actionCreators, dispatch);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>Book Details </Text>
        <Image
          source={{ uri: item.book_image }}
          style={styles.img}
          resizeMode="stretch"
        />
        <View style={styles.box}>
          <Text style={styles.title}>Book Title: {item.title}</Text>
          <Text style={styles.authortext}>Author: {item.author}</Text>
          <Text style={styles.authortext}>Price: {item.price}$</Text>
          <Text style={styles.description} numberOfLines={4}>
            Description: {item.description}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            for (let i = 0; i < books.length; i++) {
              if (books[i].title === item.title) {
                alert("Book already exist in cart");
                return;
              }
            }
            addBook(item);
            alert("Book Add to Cart, Thanks");
          }}
        >
          <Text style={styles.add}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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

    width: 300,
    height: 300,
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
  btn: {
    marginTop: 30,
    borderRadius: 60,
    width: 350,
    borderRadius: 50,
    paddingLeft: 20,
    backgroundColor: "#3cb371",
    color: "#fff",
    alignSelf: "center",
    alignItems: "center",
    height: 45,
    justifyContent: "center",
    marginBottom: 20,
  },
  add: {
    color: "#fff",
    alignSelf: "center",
    textAlignVertical: "center",
    justifyContent: "center",
  },
});

export default DetailScreen;
