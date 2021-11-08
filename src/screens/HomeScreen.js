import React, { useEffect, useState } from "react";
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
import LottieView from "lottie-react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";
const color = "#FFA500";

const HomeScreen = ({ navigation }) => {
  const [Data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=XP2mJDptKJntuwHEDG8hBReABWvuO7A1"
    )
      .then((res) => res.json())
      .then((data) => {
        let vr = data.results.books;

        setData(vr);
        setLoading(false);
      });
  }, []);
  const searchedData = (searchText) => {
    setSearch(
      Data.filter((item) => {
        return item.title.toLowerCase().includes(searchText.toLowerCase());
      })
    );
  };
  if (loading) {
    return (
      <LottieView source={require("../assets/loading.json")} autoPlay loop />
    );
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.searchbr}>
        <FontAwesome
          name="search"
          size={24}
          color="#FFA500"
          style={styles.icon}
        />
        <TextInput
          placeholder="Search....."
          style={styles.input}
          onChangeText={(searchText) => searchedData(searchText)}
        />
        <Entypo
          name="circle-with-cross"
          size={24}
          color="#FFA500"
          // onPress={() => setSearch([])}
          style={styles.icon}
        />
      </View>
      <FlatList
        data={search == "" ? Data : search}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("detail", { itemData: item })}
            >
              <View style={styles.container}>
                <Image
                  source={{ uri: item.book_image }}
                  style={styles.image}
                  resizeMode="stretch"
                />

                <View style={styles.container2}>
                  <View style={styles.text}>
                    <Text style={styles.title}>Title:</Text>
                    <Text> {item.title}</Text>
                  </View>
                  <View style={styles.text}>
                    <Text style={styles.title}>Description:</Text>
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={styles.description}
                    >
                      {item.description}
                    </Text>
                  </View>
                  <View style={styles.text}>
                    <Text style={styles.title}>Author Name:</Text>
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={styles.authortext}
                    >
                      {item.author}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flexDirection: "row",
    flex: 1,
    borderColor: color,
    borderWidth: 0.5,
    padding: 5,
    margin: 5,
  },
  container2: {
    flexDirection: "column",
    padding: 5,
    flex: 1,
  },
  image: {
    width: 150,
    height: 100,
    margin: 4,
  },
  title: {
    fontWeight: "bold",
  },
  description: {
    width: 150,
  },
  authortext: {
    width: 150,
  },
  text: {
    flexDirection: "row",
  },

  searchbr: {
    flexDirection: "row",
    alignContent: "center",
    alignSelf: "center",
    margin: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: color,
    borderRadius: 30,
    marginBottom: 10,
  },
  input: {
    width: "75%",
    marginLeft: 10,
    color: "#FFA500",
  },
  icon: {
    alignSelf: "center",
    margin: 5,
    marginLeft: 10,
  },
});

export default HomeScreen;
