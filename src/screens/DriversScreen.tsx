import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import { DriversCard } from "../components/DriverCard";

export const DriversScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [drivers, setDrivers] = useState([]);
  const [season, setSeason] = useState(2022);

  const getDrivers = async (year: number) => {
    try {
      const response = await fetch(
        `https://v1.formula-1.api-sports.io/rankings/drivers?season=${year}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key": "9684c09cd4c60215395bd06439de781d",
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
    <SafeAreaView className="h-full m-4 pb-10">
      <Image
        className="w-32 h-32 ml-4"
        source={{
          uri: "https://lezebre.lu/images/detailed/79/45334-Sticker-Formula-1-nouveau-logo-F1.png",
        }}
      />
      <Text className="font-bold text-6xl mx-4">Drivers</Text>
      <Text className="font-bold text-xl mb-6 mx-4">Année {season}</Text>
      <ScrollView className="mt-8" showsVerticalScrollIndicator={false}>
        {drivers.map((driver, index:number) => (
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
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
