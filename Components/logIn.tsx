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

function LogIn() {
  const [text, onChangeText] = React.useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BOOK ME</Text>

      <View style={styles.button}>
        <TextInput style={styles.input} value={text} placeholder="Email" />
        <TextInput style={styles.input} value={text} placeholder="Password" />

        <Button
          title="Log in"
          color="#867ae9"
          onPress={() => console.log("Hi")}
        ></Button>
      </View>
      <TouchableOpacity onPress={() => console.log("hi")}>
        <Image style={styles.img} source={book} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "gold",
    width: 414,
  },

  title: {
    color: "#867ae9",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.length : 0,
  },

  input: {
    borderWidth: 1,
    borderRadius: 5,
    flex: 1,
    flexDirection: "column",
  },
  button: {
    flexDirection: "row",
    height: 40,
    width: 50,
    borderColor: "#000000",
  },
  img: {
    width: 414,
    height: 730,
    fadeDuration: 3000,
    resizeMode: "center",
  },
});
export default LogIn;
