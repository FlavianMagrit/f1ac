import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { ConstructorCard } from "../components/ConstructorCard";

const constructors= [
    {
      position: 1,
      team: {
        id: 1,
        name: "Red Bull Racing",
        logo: "https://media-2.api-sports.io/formula-1/teams/1.png",
      },
      points: 759,
      season: 2022,
    },
    {
      position: 2,
      team: {
        id: 3,
        name: "Scuderia Ferrari",
        logo: "https://media-3.api-sports.io/formula-1/teams/3.png",
      },
      points: 554,
      season: 2022,
    },
    {
      position: 3,
      team: {
        id: 5,
        name: "Mercedes-AMG Petronas",
        logo: "https://media-1.api-sports.io/formula-1/teams/5.png",
      },
      points: 515,
      season: 2022,
    },
    {
      position: 4,
      team: {
        id: 13,
        name: "Alpine F1 Team",
        logo: "https://media-3.api-sports.io/formula-1/teams/13.png",
      },
      points: 173,
      season: 2022,
    },
    {
      position: 5,
      team: {
        id: 2,
        name: "McLaren Racing",
        logo: "https://media-2.api-sports.io/formula-1/teams/2.png",
      },
      points: 159,
      season: 2022,
    },
    {
      position: 6,
      team: {
        id: 18,
        name: "Alfa Romeo",
        logo: "https://media-2.api-sports.io/formula-1/teams/18.png",
      },
      points: 55,
      season: 2022,
    },
    {
      position: 7,
      team: {
        id: 17,
        name: "Aston Martin F1 Team",
        logo: "https://media-3.api-sports.io/formula-1/teams/17.png",
      },
      points: 55,
      season: 2022,
    },
    {
      position: 8,
      team: {
        id: 14,
        name: "Haas F1 Team",
        logo: "https://media-1.api-sports.io/formula-1/teams/14.png",
      },
      points: 37,
      season: 2022,
    },
    {
      position: 9,
      team: {
        id: 7,
        name: "Scuderia AlphaTauri Honda",
        logo: "https://media-1.api-sports.io/formula-1/teams/7.png",
      },
      points: 35,
      season: 2022,
    },
    {
      position: 10,
      team: {
        id: 12,
        name: "Williams F1 Team",
        logo: "https://media-3.api-sports.io/formula-1/teams/12.png",
      },
      points: 8,
      season: 2022,
    }
  ];

export const ConstructorsPage = () => (
    <SafeAreaView className="h-full m-4">
      <Text className="font-bold text-4xl">Constructors</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {constructors.map((constructor, index) => (
          <View className="my-2.5" key={index}>
            <ConstructorCard
              position={constructor.position}
              name={constructor.team.name}
              constructorImage={constructor.team.logo}
              points={constructor.points}
              />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
)