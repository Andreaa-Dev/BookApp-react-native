import React, { useState } from "react";
// scrollview make item scrollable
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
} from "react-native";

import comic from "../Img/comic.png";
function MainPage() {
  const [enteredBook, setEnteredBook] = useState("");
  const [bookList, setBookList] = useState([]);

  const bookInputHandler = (enteredBook) => {
    setEnteredBook(enteredBook);
  };

  const addBookListHandler = (currentBook) => {
    setBookList([
      ...currentBook,
      {
        key: Math.random().toString(),
        value: enteredBook,
      },
    ]);
  };

  const styles = StyleSheet.create({
    container: {},
    title: {
      fontFamily: "indie-flower",
      fontSize: 30,
    },
    input: {
      fontSize: 2,
    },
    img: {
      height: 50,
      width: 50,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BOOKIES</Text>
      <Image style={styles.img} source={comic} />

      {/* <TextInput
        style={styles.input}
        placeholder="Your book"
        onChangeText={bookInputHandler}
      ></TextInput>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={bookList}
        renderItem={(itemData) => <Text>{itemData.item}</Text>}
      ></FlatList> */}
    </View>
  );
}

export default MainPage;
