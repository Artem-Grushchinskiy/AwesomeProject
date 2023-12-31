import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Keyboard,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Container from "../Components/Container";
import LoginInput from "../Components/LoginInput";
import GoalButton from "../Components/GoalButton";

const RegistrationScreen = () => {
  const navigation = useNavigation();
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [extraMargin, setExtraMargin] = useState(0);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const windowDimensions = useWindowDimensions();

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

  const marginTop = Math.max(263, windowDimensions.height - 263);

  return (
    <ImageBackground
      source={require("../assets/main-bg.png")}
      style={styles.backgroundImage}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <Container style={[styles.innerContainer, { marginTop: marginTop }]}>
            <Text style={styles.title}>Увійти</Text>
            <View style={styles.form}>
              <LoginInput
                placeholder="Адреса електронної пошти"
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
                isFocused={isEmailFocused}
              />
              <View style={styles.passwordInputContainer}>
                <LoginInput
                  placeholder="Пароль"
                  secureTextEntry={!passwordVisible}
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={() => setIsPasswordFocused(false)}
                  isFocused={isPasswordFocused}
                />
                <TouchableOpacity
                  onPress={() => setPasswordVisible(!passwordVisible)}
                  style={styles.showPasswordButton}
                >
                  <Text style={styles.showPasswordButtonText}>
                    {passwordVisible ? "Приховати" : "Показати"}
                  </Text>
                </TouchableOpacity>
              </View>
              <GoalButton title="Увійти" onPress={() => {}} />
              <TouchableOpacity
                onPress={() => navigation.navigate("Registration")}
              >
                <Text style={styles.loginButtonText}>
                  Немає акаунту? Зареєструватися
                </Text>
              </TouchableOpacity>
            </View>
          </Container>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  container: {
    marginTop: 423,
    flex: 1,
  },

  avatarUploadContainer: {
    marginTop: -96,
  },
  title: {
    fontFamily: "Roboto-500",
    fontSize: 30,
    marginTop: 0,
    marginBottom: 17,
  },
  form: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingBottom: 20,
    width: "100%",
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
