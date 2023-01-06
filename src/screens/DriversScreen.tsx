import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { DriversCard } from "../components/DriverCard";
import { atom, useAtom } from "jotai";
import RNPickerSelect from "react-native-picker-select";
import { Loader } from "../components/Loader";

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
  };
  points: number;
};

export const driverAtom = atom<DriverProps>({} as DriverProps);

export const DriversScreen = ({ navigation }) => {
  const [_, setDriver] = useAtom(driverAtom);
  const [drivers, setDrivers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [season, setSeason] = useState(2022);

  const getDrivers = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://v1.formula-1.api-sports.io/rankings/drivers?season=${season}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key": "9684c09cd4c60215395bd06439de781d",
          },
        }
      );
      const json = await response.json();
      setDrivers(json.response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDrivers();
  }, [season]);

  return (
    <SafeAreaView className="h-full mt-4 mb-20">
      <View className="mx-4">
        <Text className="font-bold text-5xl">Drivers</Text>
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
        {drivers.map((driver: any, index: number): any => (
          <TouchableOpacity
            className="mb-6"
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
                points: driver.points,
              });
              navigation.navigate("Driver");
            }}
          >
            <DriversCard
              key={index}
              name={driver.driver.name}
              number={driver.driver.number}
              pilotImage={driver.driver.image}
              podium={driver.position}
              points={driver.points}
              constructor={driver.team.name}
              abbr={driver.driver.abbr}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>}
    </SafeAreaView>
  );
};
