import React from "react";
import { Image } from "react-native";
import { DriversScreen } from "./src/screens/DriversScreen";
import { MoreContentScreen } from "./src/screens/MoreContentScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { ConstructorsScreen } from "./src/screens/ConstructorsScreen";
import { ArticleScreen } from "./src/screens/ArticleScreen";
import { ConstructorsRankingScreen } from "./src/screens/ConstructorsRankingScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/screens/LoginScreen";
import firebase from "firebase/compat";

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
        <Stack.Screen name="Winners !" component={ConstructorsScreen} />
        <Stack.Screen name="HomeScreen" component={MoreContentScreen} />
        <Stack.Screen
          name="Constructors"
          component={ConstructorsRankingScreen}
        />
          <Stack.Screen name="Article" component={ArticleScreen} />
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
        component={DriversScreen}
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
            <MaterialCommunityIcons
              name="keyboard-f1"
              size={48}
              color="black"
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={user ? MoreContentScreen : LoginScreen}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="keyboard-control" color="black" size={48} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
