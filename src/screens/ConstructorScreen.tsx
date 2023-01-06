import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { constructorAtom } from "./ConstructorsScreen";

export const ConstructorScreen = () => {

    const [isLoading, setLoading] = useState(true);
    const [constructorStats, setConstructorStats] = useState<any>({});
    const [constructor, setConstructor] = useAtom(constructorAtom);
    const [constructorDrivers, setConstructorDrivers] = useState([]);

    const getConstructorStats = async (id: number) => {
        try {
            const response = await fetch(
            `https://v1.formula-1.api-sports.io/teams?id=${id}`,
            {
                method: "GET",
                headers: {
                    "x-rapidapi-key": "f26159e82d0763cd243794ffb6401347",
                },
            });
            const json = await response.json();
            setConstructorStats(json.response[0]);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const getConstructorDrivers = async (id: number, season: number) => {
        try {
            const response = await fetch(`https://v1.formula-1.api-sports.io/rankings/drivers?team=${id}&season=${season}`,
                {
                    method: "GET",
                    headers: {"x-rapidapi-key": "f26159e82d0763cd243794ffb6401347"},
                }
            );
            const json = await response.json();
            setConstructorDrivers(json.response);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getConstructorStats(constructor.id);
        getConstructorDrivers(constructor.id, constructor.season);
    }, []);

    return (
        <SafeAreaView className="h-full">
            <ScrollView>
                <View className="flex-row justify-between bg-black">
                    <View className="justify-between gap-y-4 p-2 w-2/3">
                        <View className="flex-row items-center">
                            <Text className="text-4xl font-black italic text-white">{constructor.position}</Text>
                            <Text className="text-3xl font-black italic border-l border-gray-600 pl-2 ml-2 text-white">{constructor.points}</Text>
                            <Text className="text-lg italic text-white uppercase">pts</Text>
                        </View>
                        <View>
                            <Text className="text-4xl italic font-black text-white uppercase">{constructor.name}</Text>
                        </View>
                    </View>
                    <View className="w-1/3 bg-white justify-center">
                        <Image source={{uri: constructor.logo ?? "https://wallpaper.dog/large/20509438.jpg"}} className="w-full h-16" />
                    </View>
                </View>
                <View className="px-4">
                    <Text className="text-2xl font-bold border-b border-gray-200 py-2.5">Since debut</Text>
                    <View>
                        <View className="border-b border-r rounded-b-2xl border-gray-200 mt-2.5">
                            <Text className="text-base font-medium mb-2 text-gray-600">Highest Finish</Text>
                            <View className="flex-row items-center">
                                <Text className="text-5xl font-black italic">{constructorStats?.highest_race_finish?.position}</Text>
                                <Text className="text-2xl font-bold italic">x {constructorStats?.highest_race_finish?.number}</Text>
                            </View>
                        </View>
                        <View className="border-b border-r rounded-b-2xl border-gray-200 mt-2.5">
                            <Text className="text-base font-medium mb-2 text-gray-600">Pole Positions</Text>
                            <Text className="text-5xl font-black italic">{constructorStats.pole_positions}</Text>
                        </View>
                        <View className="border-b border-r rounded-b-2xl border-gray-200 mt-2.5">
                            <Text className="text-base font-medium mb-2 text-gray-600">Fastest Laps</Text>
                            <Text className="text-5xl font-black italic">{constructorStats.fastest_laps}</Text>
                        </View>
                        <View className="border-b border-r rounded-b-2xl border-gray-200 mt-2.5">
                            <Text className="text-base font-medium mb-2 text-gray-600">World Championships Won</Text>
                            <Text className="text-5xl font-black italic">{constructorStats.world_championships}</Text>
                        </View>
                    </View>
                </View>
                <View className="px-4 mt-4 border-t border-gray-300">
                    <Text className="text-2xl font-bold border-b border-gray-200 py-2.5">Team</Text>
                    <View className="flex-row">
                        {constructorDrivers.map((driver: any, index: number) => (
                            <View className="w-1/2 pr-2" key={index}>
                                <View className="bg-black rounded-2xl overflow-hidden">
                                    <Image source={{uri: driver.driver.image}} className="w-full h-48" />
                                </View>
                                <View className="items-center">
                                    <Text className="text-lg">{driver.driver.name.split(" ")[0]}</Text>
                                    <Text className="text-xl italic font-black uppercase">{driver.driver.name.split(" ")[1]}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
                <View className="px-4 my-4 border-t border-gray-300">
                    <Text className="text-2xl font-bold border-b border-gray-200 py-2.5">Constructor</Text>
                    <View>
                        <View className="border-b border-r rounded-b-2xl border-gray-200 mt-2.5">
                            <Text className="text-base font-medium mb-2 text-gray-600">First Team Entry</Text>
                            <Text className="text-2xl font-black">{constructorStats.first_team_entry}</Text>
                        </View>
                        <View className="border-b border-r rounded-b-2xl border-gray-200 mt-2.5">
                            <Text className="text-base font-medium mb-2 text-gray-600">Base</Text>
                            <Text className="text-2xl font-black">{constructorStats.base}</Text>
                        </View>
                        <View className="border-b border-r rounded-b-2xl border-gray-200 mt-2.5">
                            <Text className="text-base font-medium mb-2 text-gray-600">President</Text>
                            <Text className="text-2xl font-black">{constructorStats.president}</Text>
                        </View>
                        <View className="border-b border-r rounded-b-2xl border-gray-200 mt-2.5">
                            <Text className="text-base font-medium mb-2 text-gray-600">Director</Text>
                            <Text className="text-2xl font-black">{constructorStats.director}</Text>
                        </View>
                        <View className="border-b border-r rounded-b-2xl border-gray-200 mt-2.5">
                            <Text className="text-base font-medium mb-2 text-gray-600">Technical Manager</Text>
                            <Text className="text-2xl font-black">{constructorStats.technical_manager}</Text>
                        </View>
                        <View className="border-b border-r rounded-b-2xl border-gray-200 mt-2.5">
                            <Text className="text-base font-medium mb-2 text-gray-600">Chassis</Text>
                            <Text className="text-2xl font-black">{constructorStats.chassis}</Text>
                        </View>
                        <View className="border-b border-r rounded-b-2xl border-gray-200 mt-2.5">
                            <Text className="text-base font-medium mb-2 text-gray-600">Engine</Text>
                            <Text className="text-2xl font-black">{constructorStats.engine}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};