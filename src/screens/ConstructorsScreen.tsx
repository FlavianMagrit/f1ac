import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, View, ScrollView, TouchableOpacity } from "react-native";
import { atom, useAtom } from "jotai";
import RNPickerSelect from "react-native-picker-select";
import { ConstructorCard } from "../components/ConstructorCard";
import { Loader } from "../components/Loader";

type ConstructorProps = {
  id: number;
  name: string;
  logo: string;
  position: number;
  points: number;
  season: number;
};

export const seasonAtom = atom<number>(2022);
export const constructorAtom = atom<ConstructorProps>({} as ConstructorProps);

export const ConstructorsScreen = ({ navigation }) => {
  const [_, setConstructor] = useAtom(constructorAtom);
  const [constructors, setConstructors] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [season, setSeason] = useAtom(seasonAtom);

  const getConstructors = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://v1.formula-1.api-sports.io/rankings/teams?season=${season}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key": "f26159e82d0763cd243794ffb6401347",
          },
        }
      );
      const json = await response.json();
      setConstructors(json.response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getConstructors();
  }, [season]);

  return (
    <SafeAreaView className="h-full mt-4 mb-20">
      <View className="mx-4">
        <Text className="font-bold text-5xl">Constructors</Text>
        <View className="w-full h-12 mx-auto mt-4 mb-4 justify-center bg-white border rounded-lg">
          <RNPickerSelect
            placeholder={{}}
            style={{
              inputIOS: {
                paddingLeft: 10,
                color: "black",
                fontSize: 18,
                fontWeight: "bold",
              },
              inputAndroid: {
                paddingLeft: 10,
                color: "black",
                fontSize: 18,
                fontWeight: "bold",
              },
              placeholder: {
                paddingLeft: 10,
                color: "black",
                fontSize: 18,
                fontWeight: "bold",
              },
            }}
            onValueChange={(value) => value && setSeason(value)}
            items={[
              { label: "Season 2022", value: 2022 },
              { label: "Season 2021", value: 2021 },
              { label: "Season 2020", value: 2020 },
              { label: "Season 2019", value: 2019 },
              { label: "Season 2018", value: 2018 },
              { label: "Season 2017", value: 2017 },
              { label: "Season 2016", value: 2016 },
              { label: "Season 2015", value: 2015 },
            ]}
          />
        </View>
      </View>
      
      {isLoading ? <Loader /> :
      <ScrollView className="mx-4" showsVerticalScrollIndicator={false}>
        {constructors.map((constructor:any, index: number) => (
          <TouchableOpacity
            key={index}
            className="mb-6"
            onPress={() => {
              setConstructor({
                id: constructor.team.id,
                name: constructor.team.name,
                logo: constructor.team.logo,
                position: constructor.position,
                points: constructor.points,
                season: constructor.season,
              });
              navigation.navigate("Constructor");
            }}
          >
          <ConstructorCard
            position={constructor.position}
            name={constructor.team.name}
            constructorImage={constructor.team.logo}
            points={constructor.points}
          />
        </TouchableOpacity>
        ))}
      </ScrollView>}
    </SafeAreaView>
  );
};
