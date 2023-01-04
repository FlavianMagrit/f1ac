import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { ConstructorCard } from "../components/ConstructorCard";

export const ConstructorsPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [constructors, setConstructors] = useState([]);
  const [season, setSeason] = useState(2022);

  const getConstructors = async (year: number) => {
    try {
      const response = await fetch(
        `https://v1.formula-1.api-sports.io/rankings/teams?season=${year}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key": "9684c09cd4c60215395bd06439de781d",
          },
        }
      );
      const json = await response.json();
      setConstructors(json.response);
      setSeason(year);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getConstructors(2022);
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
      <ScrollView showsVerticalScrollIndicator={false}>
        {constructors.map((constructor, index:number) => (
          <ConstructorCard
            key={index}
            position={constructor.position}
            name={constructor.team.name}
            constructorImage={constructor.team.logo}
            points={constructor.points}
            />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};