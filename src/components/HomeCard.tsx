import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityComponent,
  View,
} from "react-native";
import React from "react";

export const HomeCard = ({ title, image, navigation, page }) => (
  <TouchableOpacity onPress={() => navigation.navigate(page)}>
    <View className="bg-black mx-4 mb-6 py-4 rounded-2xl">
      <Text className="text-white ml-2 px-4 text-4xl">{title}</Text>
      <Image source={{uri: image}} className="w-full h-72 rounded-2xl mb-4"/>
    </View>
  </TouchableOpacity>
);
