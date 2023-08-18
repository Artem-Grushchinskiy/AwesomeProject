import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const GoalButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.GoalButton} onPress={onPress}>
      <Text style={styles.GoalButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  GoalButton: {
    backgroundColor: "#FF6C00",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
    marginTop: 43,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  GoalButtonText: {
    color: "#fff",
    fontFamily: "Roboto-400",
    fontSize: 16,
  },
});

export default GoalButton;
