import React, { useState } from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  RefreshControl,
  StyleSheet,
  Button,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
  TextInput,
  Alert,
  SafeAreaView,
  FlatList,
  ToastAndroid,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../state/action-creator/index";

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};
export default function Cart() {
  const [refreshing, setRefreshing] = React.useState(false);
  const qty = 1;
  const cart = useSelector((state) => state.cart);
  const { emptyCart, Deleteindex } = bindActionCreators(
    actionCreators,
    useDispatch()
  );
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(0).then(() => setRefreshing(false));
  }, []);

  function tabledata(item, index) {
    return (
      <View style={{ flex: 1, backgroundColor: "#f6f6f6" }}>
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#fff",
              marginBottom: 2,
              height: 120,
              width: wp("100%"),
            }}
          >
            <View style={[styles.centerElement, { width: 60 }]}>
              <TouchableOpacity
                style={[styles.centerElement, { width: 32, height: 32 }]}
                //onPress={() => this.selectHandler(i, item.checked)}
              >
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                  {index + 1}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                flexGrow: 1,
                flexShrink: 1,
                alignSelf: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {}}
                style={{ paddingRight: 10, paddingTop: 2 }}
              >
                <Image
                  source={{ uri: item.book_image }}
                  resizeMode={"contain"}
                  style={[
                    styles.centerElement,
                    { height: 85, width: 60, backgroundColor: "#eeeeee" },
                  ]}
                />
              </TouchableOpacity>
              <View
                style={{
                  flexGrow: 1,
                  flexShrink: 1,
                  alignSelf: "center",
                }}
              >
                <Text numberOfLines={1} style={{ fontSize: 15 }}>
                  {item.title}
                </Text>
                <Text numberOfLines={1} style={{ color: "#8f8f8f" }}>
                  {item.author}
                </Text>
                <Text
                  numberOfLines={1}
                  style={{ color: "#333333", marginBottom: 10 }}
                >
                  {}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{ borderWidth: 1, borderColor: "#cccccc" }}
                  >
                    <MaterialIcons name="remove" size={22} color="#cccccc" />
                  </TouchableOpacity>
                  <Text
                    style={{
                      borderTopWidth: 1,
                      borderBottomWidth: 1,
                      borderColor: "#cccccc",
                      paddingHorizontal: 7,
                      paddingTop: 3,
                      color: "#bbbbbb",
                      fontSize: 13,
                    }}
                  >
                    {qty}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{ borderWidth: 1, borderColor: "#cccccc" }}
                  >
                    <MaterialIcons name="add" size={22} color="#cccccc" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={[styles.centerElement, { width: 60 }]}>
              <TouchableOpacity
                style={[styles.centerElement, { width: 32, height: 32 }]}
                onPress={() => {
                  Deleteindex(index);
                  ToastAndroid.show("one book removed", ToastAndroid.LONG);
                  onRefresh();
                }}
                //cart.splice(index, 1)}
              >
                <Ionicons name="md-trash" size={25} color="#ee4d2d" />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
  return (
    <View style={{ flex: 1, backgroundColor: "#f6f6f6" }}>
      <FlatList
        data={cart}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => <Text>{tabledata(item, index)}</Text>}
      />
      <View
        style={{
          backgroundColor: "#fff",
          borderTopWidth: 2,
          borderColor: "#f6f6f6",
          paddingVertical: 5,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          {/* <View style={[styles.centerElement, { width: 60 }]}>
          <View style={[styles.centerElement, { width: 32, height: 32 }]}>
            <MaterialCommunityIcons name="ticket" size={25} color="#f0ac12" />
          </View>
        </View> */}
          {/* <View
          style={{
            flexDirection: 'row',
            flexGrow: 1,
            flexShrink: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text>Voucher</Text>
          <View style={{ paddingRight: 20 }}>
            <TextInput
              style={{
                paddingHorizontal: 10,
                backgroundColor: '#f0f0f0',
                height: 25,
                borderRadius: 4,
              }}
              placeholder="Enter voucher code"
              value={''}
              onChangeText={(searchKeyword) => {}}
            />
          </View> */}
          {/* </View> */}
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={[styles.centerElement, { width: 60 }]}>
            <TouchableOpacity
              style={[styles.centerElement, { width: 32, height: 32 }]}
              //  onPress={() => this.selectHandlerAll(selectAll)}
            ></TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexGrow: 1,
              flexShrink: 1,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text></Text>
            <View
              style={{
                flexDirection: "row",
                paddingRight: 20,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#8f8f8f" }}>SubTotal: </Text>
              <Text>{}</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            height: 32,
            paddingRight: 20,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={[
              styles.centerElement,
              {
                width: 100,
                height: 25,
                borderRadius: 5,
              },
            ]}
            onPress={() => {}}
          >
            <Text style={{ color: "#ffffff" }}></Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            height: 32,
            paddingRight: 20,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={[
              styles.centerElement,
              {
                backgroundColor: "#1c313a",
                width: 100,
                height: 25,
                borderRadius: 5,
              },
            ]}
            onPress={() => {
              if (cart.length == 0) {
                alert("there is no item in cart");
              } else {
                emptyCart([]);
                ToastAndroid.show("check out ", ToastAndroid.LONG);
              }
            }}
          >
            <Text style={{ color: "#ffffff" }}>check out</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* <TouchableOpacity
        style={styles.btnbox}
        onPress={() => {
          if (cart.length === 0) {
            alert('there is no food in a cart')
          } else {
            order()
            setCart([])
          }
        }}
      >
        <Text style={styles.btntext}>Order</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnbox}>
        <Text style={styles.btntext}>Total Bill</Text>
      </TouchableOpacity> */}
      <StatusBar />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  btntext: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  btnbox: {
    backgroundColor: "#1c313a",
    width: 300,
    margin: 10,
    marginLeft: 10,
    borderRadius: 25,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  centerElement: { justifyContent: "center", alignItems: "center" },
});
