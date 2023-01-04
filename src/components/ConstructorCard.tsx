import React from "react";
import { View, Text, Image } from "react-native";

type ConstructorProps = {
  position: number;
  name: string;
  constructorImage: string;
  points: number;
};

export const ConstructorCard = ({
  position,
  name,
  constructorImage,
  points,
}: ConstructorProps) => (
  <View className="bg-black mx-4 mb-6 p-4 rounded-2xl">
    <View className="flex-row justify-between">
      <View className="justify-between gap-x-4 w-1/2">
        <Text className="font-bold text-white text-2xl">{position}</Text>
        <View>
          <Text className="font-bold text-2xl text-white">{name}</Text>
        </View>
      </View>
      <View className="bg-white w-1/2 rounded-2xl items-center justify-center">
        <Image
          className="w-full aspect-square"
          source={{ uri: constructorImage }}
        />
      </View>
    </View>

    <View className="my-6 border-solid border border-white" />

    <View className="flex-row mb-4">
      <View className="bg-gray-500 rounded px-1 mr-2">
        <Text className="text-base text-white uppercase">{points} pts</Text>
      </View>
    </View>
  </View>
);
