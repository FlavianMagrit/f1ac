import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { MenuCard } from "~/components/MenuCard";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-violet-500">
      <Text className="font-bold">
        Open up App.js to start working on your app!
      </Text>
      <MenuCard />
      <StatusBar style="auto" />
    </View>
  );
}
