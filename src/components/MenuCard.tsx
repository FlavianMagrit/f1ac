import React from "react";
import { Text, View, Image } from "react-native";

type MenuProps = {
  title: string;
  image: string;
};

export const MenuCard = ({title, image}: MenuProps) => (
  <View className="bg-white mx-4 overflow-hidden rounded-2xl h-80">
    <Text className="font-bold text-4xl mt-4 ml-4">{title}</Text>
    <Image source={{uri : image}} className="h-full w-full"/>
  </View>
);
