import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { ConstructorCard } from "../components/ConstructorCard";
import { useAtom } from "jotai";
import { seasonAtom } from "./ConstructorsRankingScreen";

export const ConstructorsScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [constructors, setConstructors] = useState([]);
  const [season, setSeason] = useAtom(seasonAtom);

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
    getConstructors(season);
  }, []);

  return (
    <SafeAreaView className="h-full m-4 pb-10">
      <Text className="font-bold text-5xl mx-4">Constructors</Text>
      <Text className="font-bold text-xl mb-6 mx-4">Season {season}</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {constructors.map((constructor, index: number) => (
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
