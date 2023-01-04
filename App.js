import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { MenuCard } from "~/components/MenuCard";

export default function App() {
  return (
    <View className="flex-1 justify-center bg-black">
      <MenuCard />
      <StatusBar style="auto" />
    </View>
  );
}
