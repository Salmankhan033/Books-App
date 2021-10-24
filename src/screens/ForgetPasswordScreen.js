import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
  statusbar,
} from "react-native";

const ForgetPasswordScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.logtext}>Reset Password</Text>
        <TextInput placeholder="Enter Your Email..." style={styles.input} />

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.logBtn}>Reset Password</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.touch}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.signupBtn}>Log in Screen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#003f5c",
    flex: 1,
  },
  container2: {
    marginTop: 250,
  },
  logtext: {
    fontSize: 35,
    color: "#55ba82",
    marginBottom: 20,
    alignSelf: "center",
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#465881",
    padding: 13,
    margin: 10,
    width: 350,
    borderRadius: 50,
    paddingLeft: 20,
  },
  forgetpass: {
    alignSelf: "center",
    color: "#fff",
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
  },
  logBtn: {
    color: "#fff",
    alignSelf: "center",
    textAlignVertical: "center",
    justifyContent: "center",
  },
  signupBtn: {
    color: "#fff",
  },
  touch: {
    alignItems: "center",
    marginTop: 10,
  },
});

export default ForgetPasswordScreen;

// import React from 'react'
// import { Searchbar } from 'react-native-paper'
// import {
//   Box,
//   FlatList,
//   Heading,
//   Avatar,
//   HStack,
//   VStack,
//   Text,
//   Spacer,
//   Center,
//   NativeBaseProvider,
//   Image,
//   Input,
//   Icon,
// } from 'native-base'
// import { StatusBar } from 'expo-status-bar'
// import { Ionicons } from '@expo/vector-icons'
// import axios from 'axios'
// export const Example = () => {
//   const [booksdata, setbooksdata] = React.useState()
//   const [searched, setsearched] = React.useState([])
//   const [text, settext] = React.useState()

//   const [textAndSearched, setTextAndSearched] = React.useState({
//     text: '',
//     searched: [],
//   })
//   const searchbook = (searchText) => {
//     // Promise.resolve().then(() => {
//     //   settext(item)
//     //   setsearched(
//     //     booksdata.filter((item) => {
//     //       return item.title.toLowerCase().includes(text.toLowerCase())
//     //     })
//     //   )
//     // })
//     setTextAndSearched({
//       text: searchText,
//       searched: booksdata.filter((item) =>
//         item.title.toLowerCase().includes(searchText.toLowerCase())
//       ),
//     })
//   }

//   const getData = () => {
//     axios
//       .get(
//         'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=pYtLa7oVERVr79mzAu0XB7B0Kt6FoWvq'
//       )
//       .then((res) => {
//         setbooksdata(res.data.results.books)
//       })
//       .catch((e) => {
//         alert('api error')
//       })
//   }
//   React.useEffect(() => {
//     getData()
//   }, [])

//   React.useEffect(() => {}, [text])

//   return (
//     <Box
//       w={{
//         base: '100%',
//         md: '25%',
//       }}
//     >
//       <Box mt={4}></Box>
//       <Heading fontSize="4xl" p="4" pb="3" alignSelf="center">
//         Books
//       </Heading>
//       {/* <Input
//         placeholder="Search"
//         variant="filled"
//         width="100%"
//         bg="transparent"
//         borderRadius="10"
//         py="1"
//         px="2"
//         placeholderTextColor="gray.500"
//         _hover={{ bg: 'gray.200', borderWidth: 0 }}
//         borderWidth="0"
//         _web={{
//           _focus: { style: { boxShadow: 'none' } },
//         }}
//         InputLeftElement={
//           <Icon
//             ml="2"
//             size="5"
//             color="gray.500"
//             as={<Ionicons name="ios-search" />}
//           />
//         }
//       /> */}
//       <Searchbar placeholder="Search" onChangeText={searchbook} value={text} />
//       <FlatList
//         data={
//           textAndSearched.text === '' ? booksdata : textAndSearched.searched
//         }
//         renderItem={({ item }) => (
//           <Box
//             borderBottomWidth="1"
//             _dark={{
//               borderColor: 'gray.600',
//             }}
//             borderColor="coolGray.200"
//             pl="4"
//             pr="5"
//             py="2"
//           >
//             <HStack space={3} justifyContent="space-between">
//               <Image
//                 size={'md'}
//                 resizeMode="cover"
//                 source={{
//                   uri: item.book_image,
//                 }}
//                 alt={'Alternate Text ' + 'sm'}
//               />
//               <VStack>
//                 <Text
//                   _dark={{
//                     color: 'warmGray.50',
//                   }}
//                   color="coolGray.800"
//                   bold
//                 >
//                   Title: {item.title}
//                 </Text>
//                 <Text
//                   color="coolGray.600"
//                   _dark={{
//                     color: 'warmGray.200',
//                   }}
//                 >
//                   Author:{item.author}
//                 </Text>
//               </VStack>
//               <Spacer />
//               <Text
//                 fontSize="xs"
//                 _dark={{
//                   color: 'warmGray.50',
//                 }}
//                 color="coolGray.800"
//                 alignSelf="flex-start"
//               >
//                 View
//               </Text>
//             </HStack>
//           </Box>
//         )}
//         keyExtractor={(item, index) => index.toString()}
//       />
//     </Box>
//   )
// }

// export default () => {
//   return (
//     <NativeBaseProvider>
//       <StatusBar />
//       <Example />
//     </NativeBaseProvider>
//   )
// }
