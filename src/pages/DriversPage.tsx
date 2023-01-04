import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { DriversCard } from "../components/DriversCard";

export const DriversPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [season, setSeason] = useState(2022);

  const getDrivers = async (year) => {
    try {
      const response = await fetch(
        `https://v1.formula-1.api-sports.io/rankings/drivers?season=${year}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key": "f41fc9a65ad924ca7dc524fc2d38ca68",
          },
        }
      );
      const json = await response.json();
      setData(json.response);
      setSeason(year);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDrivers(2021);
  }, []);

  return (
    <SafeAreaView>
      <Text className="font-bold text-6xl mt-14 mx-4">Drivers</Text>
      <Text className="font-bold text-xl mb-6 mx-4">Année {season}</Text>
      <ScrollView className="mt-8">
        {data.map((driver) => (
          <DriversCard
            firstname={driver.driver.name}
            lastname={driver.driver.name}
            number={driver.driver.number}
            pilotImage={driver.driver.image}
            podium={driver.position}
            points={driver.points}
            stable={driver.team.name}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
