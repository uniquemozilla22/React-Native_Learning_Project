import React from "react";
import { View, StyleSheet, Text } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewPoint}>
      <View style={styles.textOneStyle}></View>
      <View style={styles.textTwoStyle}></View>
      <View style={styles.textThreeStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPoint: {
    margin: 15,
    borderWidth: 2,
    padding: 15,
    borderColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  textOneStyle: {
    borderWidth: 4,
    borderColor: "black",
    padding: 10,
    flex: 1,
    width: 100,
    height: 100,
  },
  textTwoStyle: {
    borderWidth: 4,
    borderColor: "black",
    padding: 10,
    flex: 1,
    alignItems: "center",
    marginTop: 100,
    width: 100,
    height: 100,
  },
  textThreeStyle: {
    borderWidth: 4,
    borderColor: "black",
    padding: 10,
    flex: 1,
    width: 100,
    height: 100,
  },
});

export default BoxScreen;
