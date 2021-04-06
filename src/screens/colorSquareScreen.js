import React, { useState, useReducer } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ColorCounter from "../Component/ColorCounter";

const reducer = (state, action) => {
  let sum_red = state.red + action.payload;
  let sum_green = state.green + action.payload;
  let sum_blue = state.blue + action.payload;
  switch (action.type) {
    case "change_red": {
      return sum_red >= 256 || sum_red < 0 ? state : { ...state, red: sum_red };
    }
    case "change_green": {
      return sum_green >= 256 || sum_green < 0
        ? state
        : { ...state, green: sum_green };
    }
    case "change_blue": {
      return sum_blue >= 256 || sum_blue < 0
        ? state
        : { ...state, blue: sum_blue };
    }
    default:
      return state;
  }
};

const colorSquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  const [Color_increment, setColor_increment] = useState(50);

  const Color = `rgb(${red},${green},${blue})`;

  return (
    <>
      <TextInput
        onChange={(e) => setColor_increment(e.target.value)}
        style={styles.textInput}
      />
      <ColorCounter
        color="red"
        functionToAdd={() =>
          dispatch({ type: "change_red", payload: Color_increment })
        }
        functionToDeduct={() =>
          dispatch({ type: "change_red", payload: -1 * Color_increment })
        }
      />
      <ColorCounter
        color="green"
        functionToAdd={() =>
          dispatch({ type: "change_green", payload: Color_increment })
        }
        functionToDeduct={() =>
          dispatch({ type: "change_green", payload: -1 * Color_increment })
        }
      />
      <ColorCounter
        color="blue"
        functionToAdd={() =>
          dispatch({ type: "change_blue", payload: Color_increment })
        }
        functionToDeduct={() =>
          dispatch({ type: "change_blue", payload: -1 * Color_increment })
        }
      />
      <View
        style={{
          height: 100,
          width: "100%",
          backgroundColor: Color,
          paddingHorizontal: "35%",
        }}
      >
        <Text>{Color}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    color: "black",
    backgroundColor: "white",
  },
});

export default colorSquareScreen;
