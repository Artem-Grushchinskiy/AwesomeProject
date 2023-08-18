import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import LoginInput from "./LoginInput";
import { AntDesign } from "@expo/vector-icons";

const EmailPasswordInput = ({
  isEmailFocused,
  setIsEmailFocused,
  isPasswordFocused,
  setIsPasswordFocused,
  showPassword,
  setShowPassword,
}) => {
  return (
    <View>
      <LoginInput
        placeholder="Адреса електронної пошти"
        onFocus={() => setIsEmailFocused(true)}
        onBlur={() => setIsEmailFocused(false)}
        isFocused={isEmailFocused}
      />
      <View style={styles.passwordInputContainer}>
        <LoginInput
          placeholder="Пароль"
          secureTextEntry={!showPassword}
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}
          isFocused={isPasswordFocused}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.showPasswordButton}
        >
          <Text style={styles.showPasswordButtonText}>
            {showPassword ? "Приховати" : "Показати"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordInputContainer: {
    position: "relative",
  },
  showPasswordButton: {
    position: "absolute",
    top: "50%",
    right: 32,
    transform: [{ translateY: -10 }],
  },
  showPasswordButtonText: {
    fontFamily: "Roboto-400",
    color: "#1B4371",
  },
});

export default EmailPasswordInput;
