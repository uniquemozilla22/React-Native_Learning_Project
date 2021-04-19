import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hey there!</Text>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Components")}
        title="Go to Components"
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("List")}
        title={"Go to List"}
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Image")}
        title={"Go to Image"}
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Value")}
        title={"Go to Value"}
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Color")}
        title={"Go to Color Creator"}
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Sqaure")}
        title={"Go to Color Square Changing"}
      />

      <Button
        style={styles.button}
        onPress={() => navigation.navigate("TextInput")}
        title={"Text Input"}
      />

      <Button
        style={styles.button}
        onPress={() => navigation.navigate("BoxScreen")}
        title={"Box Screen"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  button: {
    color: "white",
    backgroundColor: "skyblue",
    alignItems: "center",
    width: "100%",
    padding: 10,
    marginVertical: 10,
  },
});

export default HomeScreen;
