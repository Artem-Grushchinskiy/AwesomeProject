import React from "react";
import { View, StyleSheet } from "react-native";

const Container = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "white",
    width: "100%",
  },
});

export default Container;
