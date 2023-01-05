import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { auth } from "../config/firebaseConfig";
import { useNavigation } from "@react-navigation/core";

export const LogoutButton = () => {
  const navigation = useNavigation();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("Login");
        console.log("Signed out");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <TouchableOpacity
      onPress={handleSignOut}
      className="w-1/4 h-12 mr-4 mb-5 mt-10 rounded-lg bg-black justify-center"
    >
      <Text className="text-lg text-center text-white">Logout</Text>
    </TouchableOpacity>
  );
};
