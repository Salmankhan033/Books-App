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
        //console.log(vr);
        setData(vr);
        setLoading(false);
      });
    // const data = response.data.results.books;
    // let json = response.json();
    // // setData(response.data);
    // setData(response.data.results.books);
    // setData(data);
    // //    const auth=data.books.author;

    // console.log(json);
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
      <Text style={styles.header}>Books App</Text>
      <View style={styles.searchbr}>
        <FontAwesome
          name="search"
          size={24}
          color="black"
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
          color="black"
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
                  <Text style={styles.title}>Title: {item.title}</Text>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.description}
                  >
                    Description: {item.description}
                  </Text>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.authortext}
                  >
                    Author Name: {item.author}
                  </Text>
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
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
  container: {
    flexDirection: "row",
    flex: 1,
    borderBottomColor: "#000",
    borderWidth: 0.5,
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
    width: 200,
  },
  authortext: {
    width: 200,
  },
  header: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  searchbr: {
    flexDirection: "row",
    alignContent: "center",
    alignSelf: "center",
    margin: 10,
    height: 40,
    backgroundColor: "#ccefee",
    borderRadius: 30,
    marginBottom: 10,
  },
  input: {
    width: 250,
    marginLeft: 10,
  },
  icon: {
    alignSelf: "center",
    margin: 5,
  },
});

export default HomeScreen;
