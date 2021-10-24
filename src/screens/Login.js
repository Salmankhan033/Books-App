import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
  statusbar,
  KeyboardAvoidingView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as yup from "yup";

import * as firebase from "firebase";
import LottieView from "lottie-react-native";

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
            console.log(result);
            navigation.navigate("home");
            setLoading(false);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            setLoading(false);
            alert(errorMessage);
            // ..
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
            behavior={Platform.OS === "ios" ? "padding" : "position"}
          >
            <View style={styles.container2}>
              <Text style={styles.logtext}>Login</Text>
              <View style={styles.password}>
                <TextInput
                  placeholder="Email..."
                  style={styles.passinput}
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
              <View style={styles.password}>
                <TextInput
                  placeholder="Password"
                  secureTextEntry={showPassword}
                  style={styles.passinput}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
                <TouchableOpacity
                  onPress={() => setShowPAssword(!showPassword)}
                >
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
              <TouchableOpacity
                onPress={() => navigation.navigate("forgetPass")}
              >
                <Text style={styles.forgetpass}>Forget Password?</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.btn,
                  { backgroundColor: isValid ? "#3cb371" : "#CACFD2" },
                ]}
                disabled={!isValid}
                onPress={handleSubmit}
                // onPress={() => navigation.navigate("home")}
              >
                <Text style={styles.logBtn}>LOGIN</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.touch}
                onPress={() => navigation.navigate("signup")}
              >
                <Text style={styles.signupBtn}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      )}
    </Formik>
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
  passinput: {
    width: "90%",
    flex: 1,
    paddingLeft: 13,
  },
  password: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#465881",
    borderRadius: 50,
    padding: 13,
    margin: 10,
    // paddingLeft: 20,
  },
  passIcon: {},
  forgetpass: {
    alignSelf: "center",
    color: "#fff",
  },
  btn: {
    marginTop: 30,
    borderRadius: 60,
    width: 300,
    borderRadius: 50,
    paddingLeft: 20,

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
  error: {
    fontSize: 14,
    fontWeight: "bold",
    color: "red",
    marginTop: 5,
  },
});

export default Login;
