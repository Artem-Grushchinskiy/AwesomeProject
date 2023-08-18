import React from "react";
import { ImageBackground, StyleSheet, ActivityIndicator } from "react-native";

const BackgroundScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/main-bg.png")}
      style={styles.background}
    >
      <ActivityIndicator size="large" color="#ffffff" />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
});
export default BackgroundScreen;
