import React from "react";
import { View, Text, Button } from "react-native";
import { atom, useAtom } from "jotai";
import { createStackNavigator } from "@react-navigation/stack";
import { ConstructorScreen } from "./ConstructorsScreen";

export const seasonAtom = atom(2022);

export const ConstructorsRankingScreen = ({ navigation }) => {
  const [season, setSeason] = useAtom(seasonAtom);
  console.log(season);

  return (
    <View>
      <Text>{season}</Text>
      {SEASONS.map(({ value }) => (
        <Button
          title={value.toString()}
          key={value}
          onPress={() => {
            setSeason(value);
            navigation.navigate("Constructors");
          }}
        />
      ))}
    </View>
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
];
