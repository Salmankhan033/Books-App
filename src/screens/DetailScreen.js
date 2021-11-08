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
  Linking,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { actionCreators } from "../state";
const color = "#FFA500";
const DetailScreen = ({ route }) => {
  const item = route.params.itemData;
  const books = useSelector((state) => state.book);

  const dispatch = useDispatch();
  const { addBook } = bindActionCreators(actionCreators, dispatch);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={{ uri: item.book_image }}
          style={styles.img}
          resizeMode="stretch"
        />
        <View style={styles.box}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.text}>
            <Text style={styles.heading}>Author:</Text>
            <Text style={styles.authortext}> {item.author}</Text>
          </View>
          <View style={styles.text}>
            <Text style={styles.heading}>Price: </Text>
            <Text style={styles.authortext}>{item.price}$</Text>
          </View>
          <View style={styles.text}>
            <Text style={styles.heading}>Description: </Text>
            <Text style={styles.description} numberOfLines={4}>
              {item.description}
            </Text>
          </View>
          <Text style={styles.purchasTitle}>Purchase links</Text>

          <TouchableOpacity
            style={styles.linkTouch}
            onPress={() => Linking.openURL(item.buy_links[0].url)}
          >
            <Text style={styles.link}>Buy from Amazon</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.linkTouch}
            onPress={() => Linking.openURL(item.buy_links[0].url)}
          >
            <Text style={styles.link}>Buy from Apple Books</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.linkTouch}
            onPress={() => Linking.openURL(item.buy_links[0].url)}
          >
            <Text style={styles.link}>Buy from Barnes and Noble</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.linkTouch}
            onPress={() => Linking.openURL(item.buy_links[0].url)}
          >
            <Text style={styles.link}>Buy from Books-A-Million</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.linkTouch}
            onPress={() => Linking.openURL(item.buy_links[0].url)}
          >
            <Text style={styles.link}>Buy from Bookshop</Text>
          </TouchableOpacity>
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
    marginHorizontal: 10,
  },
  box: {
    margin: 10,
  },
  img: {
    width: Dimensions.get("screen").height / 2,

    width: "90%",
    height: 300,
    borderColor: color,
    borderWidth: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 10,
    alignSelf: "center",
  },
  description: { fontSize: 14, width: "70%" },
  authortext: { fontSize: 14 },

  btn: {
    marginTop: 30,
    borderRadius: 60,
    width: "95%",
    borderRadius: 50,
    paddingLeft: 20,
    backgroundColor: "#FFA500",
    color: "#fff",
    alignSelf: "center",
    alignItems: "center",
    height: 45,
    justifyContent: "center",
  },
  add: {
    color: "#fff",
    alignSelf: "center",
    textAlignVertical: "center",
    justifyContent: "center",
  },
  text: {
    flexDirection: "row",
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
  },
  linkTouch: {
    alignItems: "center",
    marginTop: 10,
  },
  link: {
    color: "green",
  },
  purchasTitle: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 10,
    alignSelf: "center",
    color: color,
  },
});

export default DetailScreen;
