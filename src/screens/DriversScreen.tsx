import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { DriversCard } from "../components/DriverCard";
import { atom, useAtom } from "jotai";

type DriverProps = {
  id: number;
  name: string;
  abbr: string;
  position: number;
  number: number;
  image: string;
  team: {
    name: string;
    logo: string;
  }
  points: number;
};

export const driverAtom = atom<DriverProps>({} as DriverProps);

export const DriversScreen = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [drivers, setDrivers] = useState([]);
  const [season, setSeason] = useState(2022);

  const [_, setDriver] = useAtom(driverAtom);

  const getDrivers = async (year: number) => {
    try {
      const response = await fetch(
        `https://v1.formula-1.api-sports.io/rankings/drivers?season=${year}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key": "35f3f95a07de3720a825ef01d8169aa2",
          },
        }
      );
      const json = await response.json();
      setDrivers(json.response);
      setSeason(year);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDrivers(2022);
  }, []);

  return (
    <SafeAreaView className="h-full mt-4 mb-20">
      <View className="mx-4 h-12">
        <Text className="font-bold text-5xl">Drivers</Text>
        <Text className="font-bold text-xl">Season {season}</Text>
      </View>
      <ScrollView className="mt-8" showsVerticalScrollIndicator={false}>
        {drivers.map((driver: any, index: number): any => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setDriver({
                id: driver.driver.id,
                name: driver.driver.name,
                abbr: driver.driver.abbr,
                position: driver.position,
                number: driver.driver.number,
                image: driver.driver.image,
                team: {
                  name: driver.team.name,
                  logo: driver.team.logo,
                },
                points: driver.points
              });
              navigation.navigate("Driver");
            }}
          >
            <DriversCard
              key={index}
              firstname={driver.driver.name}
              lastname={driver.driver.name}
              number={driver.driver.number}
              pilotImage={driver.driver.image}
              podium={driver.position}
              points={driver.points}
              constructor={driver.team.name}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
