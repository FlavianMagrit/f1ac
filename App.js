import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

import firebase from "firebase/compat";

import { DriversScreen } from "./src/screens/DriversScreen";
import { MoreContentScreen } from "./src/screens/MoreContentScreen";
import { ArticleScreen } from "./src/screens/ArticleScreen";
import { ConstructorsScreen } from "./src/screens/ConstructorsScreen";
import { ConstructorScreen } from "./src/screens/ConstructorScreen";
import { DriverScreen } from "./src/screens/DriverScreen";
import LoginScreen from "./src/screens/LoginScreen";
import { HomeScreen } from "./src/screens/HomeScreen";
import { LogoutButton } from "./src/components/LogoutButton";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View className="flex-row justify-between">
        <Image
          className="w-16 h-16 mt-4 ml-6"
          source={{
            uri: "https://lezebre.lu/images/detailed/79/45334-Sticker-Formula-1-nouveau-logo-F1.png",
          }}
        />
        <LogoutButton />
      </View>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={TabsNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MoreContentScreen" component={MoreContentScreen} />
        <Stack.Screen name="Constructor" component={ConstructorScreen} />
        <Stack.Screen name="Article" component={ArticleScreen} />
        <Stack.Screen name="Driver" component={DriverScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const TabsNavigator = () => {
  const user = firebase.auth().currentUser;

  return (
    <Tab.Navigator
      screenOptions={{ tabBarShowLabel: false, headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
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
        name="Constructors"
        component={ConstructorsScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="keyboard-f1"
              size={48}
              color="black"
            />
          ),
        }}
      />
      {
        user ?
        <Tab.Screen
          name="MoreContentScreen"
          component={MoreContentScreen}
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="keyboard-control" color="black" size={48} />
            ),
          }}
        />
        :
        <Tab.Screen
          name="User"
          component={LoginScreen}
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="keyboard-control" color="black" size={48} />
            ),
          }}
        />
      }
    </Tab.Navigator>
  );
};
