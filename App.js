import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Homepage } from "./src/pages/Homepage";
import { DriversPage } from "./src/pages/DriversPage";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Homepage}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Drivers" component={DriversPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
