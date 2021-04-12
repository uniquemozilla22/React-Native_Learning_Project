import React, { useReducer, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import CounterView from "../Component/CounterView";

const ADD = "ADD";
const DEDUCT = "DEDUCT";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD: {
      return (state += action.payload);
    }
    case DEDUCT: {
      return (state -= action.payload);
    }
    default: {
      return state;
    }
  }
};

const ValueChanger = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <View>
      <TouchableOpacity
        style={styles.increment}
        onPress={() => {
          dispatch({ type: ADD, payload: 1 });
        }}
      >
        <Text style={styles.white}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.decrement}
        onPress={() => {
          dispatch({ type: DEDUCT, payload: 1 });
        }}
      >
        <Text style={styles.white}>Decrement</Text>
      </TouchableOpacity>
      <CounterView value={state} />
    </View>
  );
};

const styles = StyleSheet.create({
  increment: {
    marginVertical: 10,
    backgroundColor: "green",
    padding: 30,
    paddingHorizontal: "40%",
  },
  decrement: {
    marginVertical: 10,
    backgroundColor: "red",
    padding: 40,
    paddingHorizontal: "40%",
  },
  white: {
    color: "white",
    fontSize: 15,
    fontWeight: "700",
  },
});

export default ValueChanger;
