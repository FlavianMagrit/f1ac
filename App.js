import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { MenuCard } from "~/components/MenuCard";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your application!</Text>
      <MenuCard />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
