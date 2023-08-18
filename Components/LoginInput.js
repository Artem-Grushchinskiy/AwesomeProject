import React from "react";
import { TextInput, StyleSheet } from "react-native";

const LoginInput = ({ placeholder, onFocus, onBlur, isFocused }) => {
  return (
    <TextInput
      style={[styles.input, isFocused && styles.inputFocused]}
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    fontFamily: "Roboto-400",
    color: "#F6F6F6",
    backgroundColor: "#E8E8E8",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 16,
    marginVertical: 16,
  },
  inputFocused: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});

export default LoginInput;
