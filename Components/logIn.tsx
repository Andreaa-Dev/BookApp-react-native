import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
} from "react-native";

import book from "../Img/book1.png";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 200,
    height: 450,
    resizeMode: "stretch",
  },
  text: {
    color: "#867ae9",
    fontSize: 20,
    fontEight: "bold",
  },
  text1: {
    color: "#867ae9",
    fontSize: 10,
    fontEight: "bold",
  },
  button: {
    flexDirection: "row",
    height: 40,
    width: 50,
    borderColor: "#000000",
  },
});

function LogIn() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.stretch} source={book}>
        <Text style={styles.text}>READ EVERYWHERE</Text>

        <Text style={styles.text1}>Log in </Text>
        <View style={styles.button}>
          <Button
            title="Email"
            color="#867ae9"
            onPress={() => Alert.alert("hi")}
          ></Button>
        </View>
      </ImageBackground>
    </View>
  );
}

export default LogIn;
