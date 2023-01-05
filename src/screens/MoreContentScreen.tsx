import React, { useEffect, useState } from "react";
import { atom, useAtom } from "jotai";
import { SafeAreaView, Text, ScrollView, TouchableOpacity } from "react-native";
import { ArticleCard } from "../components/ArticleCard";

type ArticleProps = {
  title: string;
  content?: string;
  image_url: string;
  pubDate: string;
  source: string;
  link: string;
  creator?: string;
  keywords?: Array<string>;
};

export const articleAtom = atom({} as ArticleProps);

export const MoreContentScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  const [_, setArticle] = useAtom(articleAtom);

  const getArticles = async () => {
    try {
      const response = await fetch(`https://newsdata.io/api/1/news?apikey=pub_15267b82367744d037844b9535bd615c0ed57&q=f1&language=en`);
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
    <SafeAreaView className="h-full m-4 mb-20">
      <Text className="font-bold text-4xl mx-4">News</Text>
      <ScrollView className="mt-8" showsVerticalScrollIndicator={false}>
        {articles.map((article: any, index: number) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setArticle(article);
              navigation.navigate("Article");
            }}
          >
            <ArticleCard
              title={article.title}
              articleImage={article.image_url}
              publishDate={article.pubDate}
              source={article.source}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
