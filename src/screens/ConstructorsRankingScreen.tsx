import React from "react";
import { Text, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { atom, useAtom } from "jotai";

export const seasonAtom = atom(2022);

export const ConstructorsRankingScreen = ({ navigation }) => {
  const [_, setSeason] = useAtom(seasonAtom);

  return (
    <SafeAreaView className="h-full m-4 pb-10">
      <Text className="font-bold text-2xl mx-4 mb-10">
        🏆 Constructors Ranking 🏆
      </Text>
      <ScrollView>
        {SEASONS.map(({ value }) => (
          <TouchableOpacity
            onPress={() => {
              setSeason(value);
              navigation.navigate("Winners !");
            }}
            key={value}
            className="w-3/4 h-24 mx-auto mb-4 justify-center bg-black rounded-lg"
          >
            <Text className="text-center text-2xl font-bold text-white">
              🏁 {value.toString()} 🏎
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export const SEASONS = [
  {
    value: 2022,
  },
  {
    value: 2021,
  },
  {
    value: 2020,
  },
  {
    value: 2019,
  },
  {
    value: 2018,
  },
  {
    value: 2017,
  },
  {
    value: 2016,
  },
  {
    value: 2015,
  },
];
