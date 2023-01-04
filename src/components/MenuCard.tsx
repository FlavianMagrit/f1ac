import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export const MenuCard = () => (
  <View>
    <Text className="bg-violet-200">
      Open up App.js to start working on your app!
    </Text>
    <StatusBar style="auto" />
  </View>
);
