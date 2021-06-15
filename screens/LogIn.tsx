import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
  Platform,
  Dimensions,
  TextInput,
} from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

import book from "../Img/login.png";
import Page1 from "./MainPage";
import NavigationContainer from "@react-navigation/native/lib/typescript/src/NavigationContainer";
import createStackNavigator from "@react-navigation/stack/lib/typescript/src/navigators/createStackNavigator";
import { useState } from "react";
import { Header } from "@react-navigation/stack";

import MainPage from "./MainPage";

function LogIn({ navigation }) {
  const [text, useText] = useState("");
  const styles = StyleSheet.create({
    container: {
      // backgroundColor: "#e4bced",
      height: "100%",
      width: "100%",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      color: "#867ae9",
      fontFamily: "indie-flower",
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
      paddingTop: Platform.OS === "android" ? StatusBar.length : 30,
    },
    form: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
    },
    input: {
      fontFamily: "indie-flower",
      height: 30,
      width: 200,
      borderWidth: 1,
      borderRadius: 5,
      paddingTop: 2,
      paddingBottom: 2,
      paddingLeft: 5,
      marginBottom: 10,
    },
    button: {
      fontFamily: " indie-flower ",
      flex: 1,
      height: 150,
      width: 70,
      borderWidth: 1,
      borderRadius: 5,
    },
    text: {
      fontFamily: " indie-flower ",
      textAlign: "center",
    },
    img: {
      width: 314,
      height: 530,
      fadeDuration: 3000,
      resizeMode: "center",
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BOOKIES</Text>
      <View style={styles.form}>
        <TextInput style={styles.input} value={text} placeholder="Email:" />
        <TextInput style={styles.input} value={text} placeholder="Password:" />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("MainPage")}
        >
          <Text style={styles.text}>Log in </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => console.log("hi")}>
        <Image style={styles.img} source={book} />
      </TouchableOpacity>
    </View>
  );
}

export default LogIn;
