import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const validation =
    name.length <= 5 ? (
      <Text style={styles.validation}>
        Password must be longer than 5 characters
      </Text>
    ) : null;
  return (
    <View>
      <Text style={styles.label}>Enter Your password</Text>
      <TextInput
        style={styles.input}
        onChange={() => {}}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(e) => setName(e)}
      />

      {validation}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    padding: 10,
    borderWidth: 2,
    backgroundColor: "white",
  },
  label: {
    margin: 15,
    color: "black",
    fontSize: 16,
  },
  validation: {
    color: "red",
    margin: 15,
    fontSize: 16,
  },
});

export default TextScreen;
