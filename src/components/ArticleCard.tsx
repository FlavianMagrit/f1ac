import React from 'react';
import { View, Text, Image } from 'react-native';

type ArticleProps = {
    title: string;
    articleImage: string;
    publishDate: string;
    source: string;
};

export const ArticleCard = ({
    title,
    articleImage,
    publishDate,
}: ArticleProps) => (
    <View className="bg-black mx-4 mb-6 p-4 rounded-2xl">
        <Image
            source={{uri: articleImage ?? 'https://wallpaper.dog/large/20509438.jpg'}}
            className="w-full h-32 rounded-2xl mb-4"
        />
        <Text className="text-base text-white">{title}</Text>
        <Text className="text-sm text-gray-500 text-right">{publishDate}</Text>
    </View>
);