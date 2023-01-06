import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { auth } from "../config/firebaseConfig";
import { useNavigation } from "@react-navigation/native";

import { MaterialIcons } from "@expo/vector-icons";

export const LogoutButton = () => {

  const navigation = useNavigation();

  const handleSignOut = () => {
    auth.signOut()
      .then(() => navigation.navigate("Home" as never))
      .catch((error) => alert(error.message));
  };

  return (
    <TouchableOpacity onPress={handleSignOut} className="mr-4 mb-5 mt-10">
      <MaterialIcons name="logout" color="black" size={30} />
    </TouchableOpacity>
  );
};
