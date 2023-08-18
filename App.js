import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import PostsScreen from "./Screens/PostsScreen";
import BackgroundScreen from "./Screens/BackgroundScreen";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [fontsLoaded] = useFonts({
    "Roboto-400": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-500": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoading ? (
          <Stack.Screen
            name="Background"
            component={BackgroundScreen}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              name="Registration"
              component={RegistrationScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Posts"
              component={PostsScreen}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
