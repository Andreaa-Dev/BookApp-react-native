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

import book from "../Img/book1.png";
import Page1 from "./Page1";
import NavigationContainer from "@react-navigation/native/lib/typescript/src/NavigationContainer";
import createStackNavigator from "@react-navigation/stack/lib/typescript/src/navigators/createStackNavigator";
import { useState } from "react";
import { Header } from "@react-navigation/stack";

function LogIn(props) {
  const [text, useText] = useState("");
  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      backgroundColor: "gold",
      width: 414,
    },

    title: {
      color: "#867ae9",
      fontFamily: "monospace",

      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      paddingTop: Platform.OS === "android" ? StatusBar.length : 30,
    },
    logIn: {
      flex: 1,

      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
    },
    input: {
      fontFamily: "monospace",

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
      fontFamily: " monospace ",
      flex: 1,
      height: 40,
      width: 50,
      borderRadius: 10,
    },
    img: {
      flex: 1,

      width: 414,
      height: 730,
      fadeDuration: 3000,
      resizeMode: "center",
    },
  });
  return (
    <View style={styles.container}>
      <Header title="Log in" />
      <Text style={styles.title}>BOOK ME</Text>

      <View style={styles.logIn}>
        <TextInput style={styles.input} value={text} placeholder="Email:" />
        <TextInput style={styles.input} value={text} placeholder="Password:" />

        <Button
          style={styles.button}
          title="Log in"
          color="#867ae9"
          onPress={console.log("hi")}
        ></Button>
      </View>
      <TouchableOpacity onPress={() => console.log("hi")}>
        <Image style={styles.img} source={book} />
      </TouchableOpacity>
    </View>
  );
}

export default LogIn;
