import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { DriversCard } from "~/components/DriversCard";

export default function App() {
  return (
    <View className="flex-1 justify-center bg-violet-500">
      <Text>Open up App.js to start working on your app!</Text>
      <DriversCard />
      <StatusBar style="auto" />
    </View>
  );
}
