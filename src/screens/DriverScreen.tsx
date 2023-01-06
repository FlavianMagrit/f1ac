import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { driverAtom } from "./DriversScreen";

export const DriverScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [driverStats, setDriverStats] = useState<any>({});
  const [driver, setDriver] = useAtom(driverAtom);

  const getDriverStats = async (id: number) => {
    try {
      const response = await fetch(
        `https://v1.formula-1.api-sports.io/drivers?id=${id}`,
        {
          method: "GET",
          headers: { "x-rapidapi-key": "f26159e82d0763cd243794ffb6401347" },
        }
      );
      const json = await response.json();
      setDriverStats(json.response[0]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDriverStats(driver.id);
  }, []);

  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <View className="flex-row justify-between bg-black">
          <View className="justify-between p-2">
            <View className="flex-row items-center">
              <Text className="text-4xl font-black italic text-white">{driver.number}</Text>
              <Text className="text-lg italic ml-2 text-white uppercase">{driver.abbr}</Text>
              <Text className="text-lg italic border-l border-gray-600 pl-2 ml-2 text-white uppercase">{driver.team.name}</Text>
            </View>
            <View>
              <Text className="text-2xl text-white">{driver.name.split(" ")[0]}</Text>
              <Text className="text-4xl italic font-black text-white uppercase">{driver.name.split(" ")[1]}</Text>
            </View>
          </View>
          <Image source={{uri: driver.image ?? "https://wallpaper.dog/large/20509438.jpg"}} className="w-36 h-36"/>
        </View>
        <View className="px-4">
          <Text className="text-2xl font-bold border-b border-gray-200 py-2.5">Since debut</Text>
          <View>
            <View className="border-b border-r rounded-b-2xl border-gray-200 mt-2.5">
              <Text className="text-base font-medium mb-2 text-gray-600">Podiums</Text>
              <Text className="text-5xl font-black italic">{driverStats.podiums}</Text>
            </View>
            <View className="border-b border-r rounded-b-2xl border-gray-200 mt-2.5">
              <Text className="text-base font-medium mb-2 text-gray-600">GPs Entered</Text>
              <Text className="text-5xl font-black italic">{driverStats.grands_prix_entered}</Text>
            </View>
            <View className="border-b border-r rounded-b-2xl border-gray-200 mt-2.5">
              <Text className="text-base font-medium mb-2 text-gray-600">World Championships Won</Text>
              <Text className="text-5xl font-black italic">{driverStats.world_championships}</Text>
            </View>
            <View className="border-b border-r rounded-b-2xl border-gray-200 mt-2.5">
              <Text className="text-base font-medium mb-2 text-gray-600">Career Points</Text>
              <Text className="text-5xl font-black italic">{driverStats.career_points}</Text>
            </View>
          </View>
        </View>
        <View className="px-4 mt-4 border-t border-gray-300">
          <Text className="text-2xl font-bold py-2.5">Team</Text>
          <Image source={{uri: driver.team.logo ?? "https://wallpaper.dog/large/20509438.jpg"}} className="w-full h-48"/>
        </View>
        <View className="px-4 my-4 border-t border-gray-300">
          <Text className="text-2xl font-bold border-b border-gray-200 py-2.5">Driver</Text>
          <View>
            <View className="border-b border-r rounded-b-2xl border-gray-200 mt-2.5">
              <Text className="text-base font-medium mb-2 text-gray-600">Country</Text>
              <Text className="text-2xl font-black">{driverStats?.country?.name}</Text>
            </View>
            <View className="border-b border-r rounded-b-2xl border-gray-200 mt-2.5">
              <Text className="text-base font-medium mb-2 text-gray-600">nationality</Text>
              <Text className="text-2xl font-black">{driverStats.nationality}</Text>
            </View>
            <View className="border-b border-r rounded-b-2xl border-gray-200 mt-2.5">
              <Text className="text-base font-medium mb-2 text-gray-600">Birthplace</Text>
              <Text className="text-2xl font-black">{driverStats.birthplace}</Text>
            </View>
            <View className="border-b border-r rounded-b-2xl border-gray-200 mt-2.5">
              <Text className="text-base font-medium mb-2 text-gray-600">Birthdate</Text>
              <Text className="text-2xl font-black">{driverStats.birthdate}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
