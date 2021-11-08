import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as yup from "yup";

import * as firebase from "firebase";
import LottieView from "lottie-react-native";
const color = "#FFA500";
let validateLogin = yup.object().shape({
  email: yup
    .string()
    .email("Please Enter Valid Email Address")
    .required("Email is required field"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password most me at least ${min} characters!`)
    .required("Password is required field")
    .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"),
});

const Login = ({ navigation }) => {
  const [showPassword, setShowPAssword] = useState(true);
  const [loading, setLoading] = useState(false);
  if (loading) {
    return (
      <LottieView source={require("../assets/loading.json")} autoPlay loop />
    );
  }
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validateOnMount={true}
      onSubmit={(values) => {
        setLoading(true);
        firebase
          .auth()
          .signInWithEmailAndPassword(values.email, values.password)
          .then((result) => {
            navigation.navigate("home");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            setLoading(false);
            alert(errorMessage);
          });
      }}
      validationSchema={validateLogin}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
      }) => (
        <View style={styles.container}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "padding"}
          >
            <Image
              source={require("../assets/bookLogo.png")}
              style={styles.logo}
            />
            <Text style={styles.logtext}>Login</Text>
            <View style={styles.inputField}>
              <TextInput
                placeholder="Email..."
                style={styles.boxinput}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              />

              <Ionicons
                name={!errors.email ? "md-checkmark-outline" : "close"}
                size={24}
                color="black"
                style={[
                  styles.passIcon,
                  { color: !errors.email ? "#4632A1" : "red" },
                ]}
              />
            </View>

            {errors.email && touched.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}
            <View style={styles.inputField}>
              <TextInput
                placeholder="Password"
                secureTextEntry={showPassword}
                style={styles.boxinput}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              <TouchableOpacity onPress={() => setShowPAssword(!showPassword)}>
                <Ionicons
                  name={showPassword ? "ios-eye" : "ios-eye-off"}
                  size={24}
                  color="black"
                  style={styles.passIcon}
                />
              </TouchableOpacity>
            </View>
            {errors.password && touched.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <TouchableOpacity onPress={() => navigation.navigate("forgetPass")}>
              <Text style={styles.forgetpass}>Forget Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.btn,
                { backgroundColor: isValid ? color : "#CACFD2" },
              ]}
              disabled={!isValid}
              onPress={handleSubmit}
              onPress={() => navigation.navigate("home")}
            >
              <Text style={styles.logBtn}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.touch}
              onPress={() => navigation.navigate("signup")}
            >
              <Text>Don't have an account? </Text>
              <Text style={styles.signupBtn}>SignUp here</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      )}
    </Formik>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    flex: 1,
  },
  container2: {
    marginTop: 250,
    paddingHorizontal: 20,
  },
  logtext: {
    fontSize: 16,
    // color: "#55ba82",
    marginBottom: 20,
    alignSelf: "center",
    fontWeight: "bold",
    color: color,
  },
  input: {
    backgroundColor: "#465881",
    padding: 13,
    margin: 10,
    borderRadius: 60,
    paddingLeft: 20,
    color: "white",
  },
  boxinput: {
    width: "90%",
    borderRadius: 60,
    flex: 1,
    paddingLeft: 13,
    color: color,
    backgroundColor: "#fff",
  },
  inputField: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: color,
    borderWidth: 1,
    width: "100%",
    borderRadius: 60,
    padding: 13,
    marginTop: 20,

    // paddingLeft: 20,
  },
  passIcon: {},
  forgetpass: {
    alignSelf: "center",
    color: color,
    marginTop: 15,
  },
  btn: {
    marginTop: 30,
    borderRadius: 60,
    width: "100%",
    borderRadius: 60,
    paddingLeft: 20,
    alignSelf: "center",
    alignItems: "center",
    padding: 15,
    justifyContent: "center",
  },
  logBtn: {
    color: "#000",
    alignSelf: "center",
    textAlignVertical: "center",
    justifyContent: "center",
  },
  signupBtn: {
    color: color,
    fontWeight: "bold",
  },
  touch: {
    marginTop: 15,
    flexDirection: "row",
    alignSelf: "center",
  },
  error: {
    fontSize: 14,
    fontWeight: "bold",
    color: "red",

    alignSelf: "center",
  },
  logo: {
    width: 300,
    height: 200,
    alignSelf: "center",
  },
});

export default Login;
