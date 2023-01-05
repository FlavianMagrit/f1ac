import React from "react";
import { Image, Linking, Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import { useAtom } from "jotai";
import { articleAtom } from "./Home";

export const ArticleScreen = () => {
    const [article, setArticle] = useAtom(articleAtom);
    return (
        <SafeAreaView className="h-full">
            <ScrollView>
                <Image
                    source={{uri: article.image_url ?? 'https://wallpaper.dog/large/20509438.jpg'}}
                    className="w-full h-64 mb-4"
                />
                <View className="px-4 gap-y-2.5">
                    <Text className="text-3xl font-bold">{article.title}</Text>
                    <Text className="text-sm text-gray-500">{article.pubDate} {article?.creator}</Text>
                    <Text className="text-justify">{article?.content}</Text>
                    <View className="flex-row flex-wrap">
                        {article?.keywords?.map((keyword:string, index:number) => (
                            <View className="bg-gray-500 rounded px-1 mr-2 mb-2">
                                <Text className="text-base text-white">{keyword}</Text>
                            </View>
                        ))}
                    </View>
                    <Pressable 
                        onPress={() => Linking.openURL(article.link)}
                        className="bg-black uppercase rounded-2xl mx-auto px-4 py-2.5 mb-6">
                        <Text className="text-white">View full article</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};