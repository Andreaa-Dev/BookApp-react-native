import React, { useState } from "react";
import { TextInput } from "react-native";
// scrollview make item scrollable
import { StyleSheet, View, Text, ScrollView, FlatList } from "react-native";

function Page1() {
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
    container: {
      fontFamily: "monospace",
    },
    title: {
      fontSize: 1,
    },
    input: {
      fontSize: 2,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BOOK ME</Text>
      <TextInput
        style={styles.input}
        placeholder="Your book"
        onChangeText={bookInputHandler}
      ></TextInput>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={bookList}
        renderItem={(itemData) => <Text>{itemData.item}</Text>}
      ></FlatList>
    </View>
  );
}

export default Page1;
