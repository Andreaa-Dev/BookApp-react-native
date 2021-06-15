import React from "react";
import { StyleSheet, View, Text } from "react-native";

function Header(props) {
  const { title } = props;
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  const styles = StyleSheet.create({
    header: {
      width: "100%",
      height: 90,
      paddingTop: 30,
      backgroundColor: "#d7e448",
      alignItems: "center",
    },
    title: {
      color: "black",
    },
  });
}
export default Header;
