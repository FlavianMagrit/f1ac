import React from "react";
import { View } from "react-native";
import { DriversScreen } from "./src/screens/DriversScreen";
import { Home } from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Driver" component={DriversScreen} />
        <Tab.Screen name="Constructor" component={DriversScreen} />
        <Tab.Screen name="ooo" component={DriversScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
