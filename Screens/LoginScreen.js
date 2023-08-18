import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Вход</Text>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Логин" />
        <TextInput
          style={styles.input}
          placeholder="Пароль"
          secureTextEntry={true}
        />
        <Button title="Войти" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
  },
  form: {
    marginTop: 20,
    width: "80%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default LoginScreen;
