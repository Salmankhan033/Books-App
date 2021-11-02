import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
import { Feather, MaterialIcons } from "@expo/vector-icons";

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};
const CartScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [quantity, setQuantity] = useState(1);
  const books = useSelector((state) => state.book);
  console.log("Total books Before deleted " + books.length);
  const dispatch = useDispatch();
  const { removeBook } = bindActionCreators(actionCreators, dispatch);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(0).then(() => setRefreshing(false));
  }, []);

  return (
    <View>
      <FlatList
        data={books}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View>
            <View style={styles.container}>
              <Image
                source={{ uri: item.book_image }}
                style={styles.image}
                resizeMode="stretch"
              />

              <View style={styles.container2}>
                <Text style={styles.title}>
                  Title: {item.title} ({index})
                </Text>
                <View style={styles.add}>
                  <TouchableOpacity onPress={() => setQuantity(quantity - 1)}>
                    <Feather name="minus-circle" size={24} color="black" />
                  </TouchableOpacity>
                  <Text style={styles.txt}>{quantity}</Text>
                  <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                    <Feather name="plus-circle" size={24} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.dlt}
                    onPress={() => {
                      removeBook(index);
                      console.log("book deleted(Index NO)" + index);
                      console.log("Total books after deleted " + books.length);
                      onRefresh();
                    }}
                  >
                    <MaterialIcons name="delete" size={30} color="red" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
  container: {
    flexDirection: "row",
    flex: 1,
    borderBottomColor: "#000",
    borderWidth: 0.5,
    marginTop: StatusBar.currentHeight,
  },
  container2: {
    flexDirection: "column",
    padding: 5,
    flex: 1,
  },
  add: {
    marginTop: 30,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 100,
    margin: 4,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  txt: {
    paddingLeft: 10,
    marginRight: 10,
  },
  dlt: {
    marginLeft: 50,
  },
});

export default CartScreen;
