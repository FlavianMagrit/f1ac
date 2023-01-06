import React from "react";
import { Image, Text, View } from "react-native";

interface DriverProps {
  number: number;
  firstname: string;
  lastname: string;
  pilotImage: string;
  points: string;
  constructor: string;
  podium: number;
  abbr: string;
}

export const DriversCard = ({
  number,
  firstname,
  lastname,
  pilotImage,
  points,
  constructor,
  abbr
}: DriverProps) => (
  <View className="bg-black p-4 rounded-2xl">
    <View className="flex-row py-2 justify-between">
      <View className="justify-between">
        <View className="flex-row items-center">
          <Text className="text-4xl font-black italic text-white">{number}</Text>
          {abbr && <Text className="text-lg italic border-l border-gray-600 pl-2 ml-2 text-white uppercase">{abbr}</Text>}
        </View>
        <View>
          <Text className="text-xl font-bold text-white">{firstname.split(" ")[0]}</Text>
          <Text className="text-3xl italic font-black text-white uppercase">{lastname.split(" ").splice(1).join(" ")}</Text>
        </View>
      </View>

      <View className="bg-white rounded-2xl">
        <Image className="w-32 h-32 rounded-2xl" source={{uri: pilotImage}} />
      </View>
    </View>

    <View className="my-6 border-solid border border-white" />

    <View className="flex-row mb-4 flex-wrap gap-y-2">
      <View className="bg-gray-500 rounded px-1 mr-2">
        <Text className="text-base text-white uppercase">{points ? points : 0} pts</Text>
      </View>
      <View className="bg-gray-500 rounded px-1 mr-2">
        <Text className="text-base text-white uppercase">{constructor}</Text>
      </View>
    </View>
  </View>
);
