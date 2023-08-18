import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Platform,
  Keyboard,
} from "react-native";
import GoalButton from "../Components/GoalButton";
import AvatarUpload from "../Components/AvatarUpload";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const RegistrationScreen = () => {
  const [isLoginFocused, setIsLoginFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [extraMargin, setExtraMargin] = useState(0);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      (e) => {
        setExtraMargin(e.endCoordinates.height + 10);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setExtraMargin(0);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <ImageBackground
      source={require("../assets/main-bg.png")}
      style={styles.backgroundImage}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={[
          styles.container,
          { marginTop: 263 - extraMargin },
        ]}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.avatarUploadContainer}>
          <AvatarUpload />
        </View>
        <Text style={styles.title}>Реєстрація</Text>
        <View style={styles.form}>
          <TextInput
            style={[styles.input, isLoginFocused && styles.inputFocused]}
            placeholder="Логін"
            onFocus={() => setIsLoginFocused(true)}
            onBlur={() => setIsLoginFocused(false)}
          />
          <TextInput
            style={[styles.input, isEmailFocused && styles.inputFocused]}
            placeholder="Адреса електронної пошти"
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
          />
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={[styles.input, isPasswordFocused && styles.inputFocused]}
              placeholder="Пароль"
              secureTextEntry={!showPassword}
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
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
          <GoalButton title="Зареєстуватися" onPress={() => {}} />
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.loginButtonText}>Вже є акаунт? Увійти</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "white",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  avatarUploadContainer: {
    marginTop: -60,
  },
  title: {
    fontFamily: "Roboto-500",
    fontSize: 30,
    marginTop: 32,
  },
  form: {
    backgroundColor: "white",
    padding: 20,
    width: "100%",
  },
  input: {
    fontFamily: "Roboto-400",
    color: "#F6F6F6",
    backgroundColor: "#E8E8E8",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 16,
    margin: 16,
  },
  inputFocused: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  loginButtonText: {
    marginTop: 16,
    marginBottom: 43,
    color: "#1B4371",
    marginLeft: "auto",
    marginRight: "auto",
  },
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

export default RegistrationScreen;
