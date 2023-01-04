import React from "react";
import { View } from "react-native";
import { DriversScreen } from "./src/screens/DriversScreen";
import { Home } from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{ showLabel: false }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="garage-open-variant"
                color="black"
                size={30}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Driver"
          component={DriversScreen}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="drivers-license" color="black" size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Constructor"
          component={DriversScreen}
          options={{
            tabBarIcon: () => (
              // <Ionicons name="md-car-sport" color="black" size={30} />
              <MaterialCommunityIcons
                name="keyboard-f1"
                size={48}
                color="black"
              />
            ),
          }}
        />
        <Tab.Screen
          name="ooo"
          component={DriversScreen}
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="keyboard-control" color="black" size={48} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
