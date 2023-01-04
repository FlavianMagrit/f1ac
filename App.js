import React from "react";
import { Image, StatusBar, View } from "react-native";
import { DriversScreen } from "./src/screens/DriversScreen";
import { Home } from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { ConstructorScreen } from "./src/screens/ConstructorsScreen";
import { ConstructorsRankingScreen } from "./src/screens/ConstructorsRankingScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Image
        className="w-16 h-16 mt-4 ml-6"
        source={{
          uri: "https://lezebre.lu/images/detailed/79/45334-Sticker-Formula-1-nouveau-logo-F1.png",
        }}
      />
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={TabsNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Winners !" component={ConstructorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const TabsNavigator = () => (
  <Tab.Navigator screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
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
      name="Drivers"
      component={DriversScreen}
      options={{
        tabBarIcon: () => (
          <FontAwesome name="drivers-license" color="black" size={30} />
        ),
      }}
    />
    <Tab.Screen
      name="ConstructorsRanking"
      component={ConstructorsRankingScreen}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons name="keyboard-f1" size={48} color="black" />
        ),
      }}
    />
    <Tab.Screen
      name="User"
      component={DriversScreen}
      options={{
        tabBarIcon: () => (
          <MaterialIcons name="keyboard-control" color="black" size={48} />
        ),
      }}
    />
  </Tab.Navigator>
);
