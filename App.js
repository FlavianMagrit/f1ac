import React, { useEffect, useState } from "react";
import { Image, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FontAwesome, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import firebase from "firebase/compat";

import { DriversScreen } from "./src/screens/DriversScreen";
import { ArticlesScreen } from "./src/screens/ArticlesScreen";
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

  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) setIsLogged(true);
      else setIsLogged(false);
    });
  }, []);

  return (
    <NavigationContainer>
        <View className="flex-row justify-between">
          <Image className="w-16 h-16 mt-4 ml-6" source={{uri: "https://lezebre.lu/images/detailed/79/45334-Sticker-Formula-1-nouveau-logo-F1.png"}} />
          {isLogged && <LogoutButton />}
        </View>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={TabsNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Articles" component={ArticlesScreen} />
        <Stack.Screen name="Constructor" component={ConstructorScreen} />
        <Stack.Screen name="Article" component={ArticleScreen} />
        <Stack.Screen name="Driver" component={DriverScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const TabsNavigator = () => {
  const user = firebase.auth().currentUser;
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{tabBarIcon: () => <MaterialCommunityIcons name="garage-open-variant" color="black" size={30} />}}/>
      <Tab.Screen
        name="Drivers"
        component={DriversScreen}
        options={{tabBarIcon: () => <FontAwesome name="drivers-license" color="black" size={30} />}} />
      <Tab.Screen
        name="Constructors"
        component={ConstructorsScreen}
        options={{tabBarIcon: () => <MaterialCommunityIcons name="keyboard-f1" size={48} color="black" />}}
      />
      {
        user ?
          <Tab.Screen
            name="Articles"
            component={ArticlesScreen}
            options={{tabBarIcon: () => <MaterialIcons name="keyboard-control" color="black" size={48} />}}/>
        :
          <Tab.Screen
            name="User"
            component={LoginScreen}
            options={{tabBarIcon: () => <MaterialIcons name="keyboard-control" color="black" size={48} />}}/>
      }
    </Tab.Navigator>
  );
};
