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
  <View className="bg-black p-4 rounded-2xl">
    <View className="flex-row justify-between">
      <View className="justify-between gap-x-4 w-2/3">
        <Text className="text-4xl font-black italic text-white">{position}</Text>
        <View>
          <Text className="text-3xl italic font-black text-white uppercase">{name}</Text>
        </View>
      </View>
      <View className="bg-white rounded-2xl aspect-square justify-center">
        <Image className="w-32 h-16 rounded-2xl" source={{uri: constructorImage}} />
      </View>
    </View>

    <View className="my-6 border-solid border border-white" />

    <View className="flex-row mb-4">
      <View className="bg-gray-500 rounded px-1 mr-2">
        <Text className="text-base text-white uppercase">{points ? points : 0} pts</Text>
      </View>
    </View>
  </View>
);
