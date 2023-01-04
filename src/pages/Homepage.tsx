import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Image, ScrollView } from "react-native";
import { ArticleCard } from "../components/ArticleCard";

export const HomePage = () => {

  const [isLoading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    try {
      const response = await fetch(`https://newsdata.io/api/1/news?apikey=pub_15267b82367744d037844b9535bd615c0ed57&q=f1&language=en`, {method: "GET"});
      const json = await response.json();
      setArticles(json.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <SafeAreaView className="h-full m-4 pb-10">
      <Image
        className="w-32 h-32 ml-4"
        source={{
          uri: "https://lezebre.lu/images/detailed/79/45334-Sticker-Formula-1-nouveau-logo-F1.png",
        }}
      />
      <Text className="font-bold text-6xl mx-4">News</Text>
      <ScrollView className="mt-8" showsVerticalScrollIndicator={false}>
        {articles.map((article, index:number) => (
          <ArticleCard
            key={index}
            title={article.title}
            articleImage={article.image_url}
            publishDate={article.pubDate}
            source={article.source}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
