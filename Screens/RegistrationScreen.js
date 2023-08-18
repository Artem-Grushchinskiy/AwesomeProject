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
import EmailPasswordInput from "../Components/EmailPasswordInput";
import GoalButton from "../Components/GoalButton";
import AvatarUpload from "../Components/AvatarUpload";

const RegistrationScreen = () => {
  const navigation = useNavigation();
  const [isLoginFocused, setIsLoginFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [extraMargin, setExtraMargin] = useState(0);
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
            <View style={styles.avatarUploadContainer}>
              <AvatarUpload />
            </View>
            <Text style={styles.title}>Реєстрація</Text>
            <View style={styles.form}>
              <LoginInput
                placeholder="Логін"
                onFocus={() => setIsLoginFocused(true)}
                onBlur={() => setIsLoginFocused(false)}
                isFocused={isLoginFocused}
              />
              <EmailPasswordInput
                isEmailFocused={isEmailFocused}
                setIsEmailFocused={setIsEmailFocused}
                isPasswordFocused={isPasswordFocused}
                setIsPasswordFocused={setIsPasswordFocused}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
              <GoalButton title="Зареєстуватися" onPress={() => {}} />
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.loginButtonText}>Вже є акаунт? Увійти</Text>
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
    marginTop: 323,
    flex: 1,
  },

  avatarUploadContainer: {
    marginTop: -96,
  },
  title: {
    fontFamily: "Roboto-500",
    fontSize: 30,
    marginTop: 32,
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
});

export default RegistrationScreen;
