import React, { useEffect, useState } from "react";
import { Text, ScrollView, SafeAreaView, View, TouchableOpacity } from "react-native";
import { atom, useAtom } from "jotai";
import RNPickerSelect from "react-native-picker-select";
import { ConstructorCard } from "../components/ConstructorCard";

type ConstructorProps = {
  id: number;
  name: string;
  logo: string;
  position: number;
  points: number;
  season: number;
}

export const seasonAtom = atom<number>(2022);
export const constructorAtom = atom<ConstructorProps>({} as ConstructorProps);

export const ConstructorsScreen = ({ navigation }) => {
  const [season, setSeason] = useAtom(seasonAtom);
  const [constructor, setConstructor] = useAtom(constructorAtom);
  const [_, setLoading] = useState(true);
  const [constructors, setConstructors] = useState([]);

  const getConstructors = async () => {
    try {
      const response = await fetch(
        `https://v1.formula-1.api-sports.io/rankings/teams?season=${season}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key": "35f3f95a07de3720a825ef01d8169aa2",
          },
        }
      );
      const json = await response.json();
      setConstructors(json.response);
      setSeason(season);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getConstructors();
  }, [season]);

  let pickerSelectStyles;
  return (
    <SafeAreaView className="h-full m-4 pb-10">
      <Text className="font-bold text-2xl mx-4 mb-10">
        🏆 Constructors Ranking 🏆
      </Text>
      <View className="w-full h-12 mx-auto mb-4 justify-center bg-white border rounded-lg">
        <RNPickerSelect
          placeholder={{ label: "Select a season", value: null }}
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
          onValueChange={(value) => setSeason(value)}
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
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {constructors.map((constructor: any, index: number) => (
          <TouchableOpacity
            key={index}
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
      </ScrollView>*/}
      {/*<ScrollView>*/}
      {/*  {SEASONS.map(({ value }) => (*/}
      {/*    <TouchableOpacity*/}
      {/*      onPress={() => {*/}
      {/*        setSeason(value);*/}
      {/*        navigation.navigate("Winners !");*/}
      {/*      }}*/}
      {/*      key={value}*/}
      {/*      className="w-3/4 h-24 mx-auto mb-4 justify-center bg-black rounded-lg"*/}
      {/*    >*/}
      {/*      <Text className="text-center text-2xl font-bold text-white">*/}
      {/*        🏁 {value.toString()} 🏎*/}
      {/*      </Text>*/}
      {/*    </TouchableOpacity>*/}
      {/*  ))}*/}
      {/*</ScrollView>*/}
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
