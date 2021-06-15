import React from "react";
import { StyleSheet, View, Text } from "react-native";

function Header(props) {
  const { title } = props;
  const styles = StyleSheet.create({
    header: {
      width: "100%",
      height: 90,
      paddingTop: 30,
      backgroundColor: "#d7e448",
      alignItems: "center",
    },
    title: {
      fontFamily: "indie-flower",
    },
  });
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
export default Header;
