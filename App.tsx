import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AppLoading from "expo-app-loading";
// import { AppLoading } from "expo";
import * as Font from "expo-font";

import Header from "./screens/Header";
import LogIn from "./screens/LogIn";
import Page1 from "./screens/Page1";

import bookMainPage from "./Img/bookMainPage.png";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e4bced",
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: 10,
    marginBottom: 50,
    fontFamily: "indie-flower",
    fontSize: 30,
    textAlign: "center",
  },
  img: {
    height: "40%",
    width: 300,
  },
  button: {
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 5,
  },
  text: {
    fontFamily: "indie-flower",
    fontSize: 30,
    height: 40,
    width: 150,
    textAlign: "center",
  },
});

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WELCOME TO BOOKIES</Text>
      <Image style={styles.img} source={bookMainPage} />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Log in")}
      >
        <Text style={styles.text}>LOG IN </Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  const Stack = createStackNavigator();

  const [fontLoaded, setFontLoaded] = useState(false);
  const fetchFont = () => {
    return Font.loadAsync({
      "indie-flower": require("./assets/fonts/IndieFlower-Regular.ttf"),
    });
  };
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LogIn" component={LogIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
