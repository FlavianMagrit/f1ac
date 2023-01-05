import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { auth } from "../config/firebaseConfig";
import { useNavigation } from "@react-navigation/native";
export const LogoutButton = () => {

  const navigation = useNavigation();

  const handleSignOut = () => {
    auth.signOut()
      .then(() => navigation.navigate("Home" as never))
      .catch((error) => alert(error.message));
  };

  return (
    <TouchableOpacity onPress={handleSignOut} className="w-1/4 h-12 mr-4 mb-5 mt-10 rounded-lg bg-black justify-center">
      <Text className="text-lg text-center text-white">Logout</Text>
    </TouchableOpacity>
  );
};
