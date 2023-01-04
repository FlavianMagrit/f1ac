import React from "react";
import { Image, Text, View } from "react-native";

export const DriversCard = ({
  rank,
  firstname,
  lastname,
  piloteImage,
  points,
  stable,
  podium,
}) => (
  <View className="bg-black mx-4 px-4 rounded-2xl">
    <View className="flex-row py-2 justify-between">
      <View className="justify-between">
        <Text className="font-bold text-white text-2xl">{rank}</Text>
        <View>
          <Text className="font-bold text-base text-white">{firstname}</Text>
          <Text className="font-bold text-3xl text-white">{lastname}</Text>
        </View>
      </View>

      <View>
        <Image className="w-32 h-32 rounded-2xl" source={piloteImage} />
      </View>
    </View>

    <View className="my-6 border-solid border border-white" />

    <View className="flex-row mb-4">
      <View className="bg-gray-500 rounded px-1 mr-2">
        <Text className="text-base text-white">{points}pts</Text>
      </View>
      <View className="bg-gray-500 rounded px-1 mr-2">
        <Text className="text-base text-white">{stable}</Text>
      </View>
      <View className="bg-gray-500 rounded px-1">
        <Text className="text-base text-white">{podium}podium</Text>
      </View>
    </View>
  </View>
);
