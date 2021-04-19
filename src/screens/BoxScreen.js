import React from "react";
import { View, StyleSheet, Text } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewPoint}>
      <Text style={styles.textOneStyle}>Child 1 </Text>
      <Text style={styles.textTwoStyle}>Child 2 </Text>
      <Text style={styles.textThreeStyle}>Child 3 </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPoint: {
    margin: 15,
    borderWidth: 2,
    padding: 15,
    borderColor: "red",
    height: 200,
    alignItems: "center",
  },
  textOneStyle: {
    borderWidth: 4,
    borderColor: "black",
    padding: 10,
  },
  textTwoStyle: {
    borderWidth: 4,
    borderColor: "black",
    padding: 10,
    position: "absolute",
  },
  textThreeStyle: {
    borderWidth: 4,
    borderColor: "black",
    padding: 10,
  },
});

export default BoxScreen;
