import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { HomeCard } from "../components/HomeCard";

export const HomeScreen = ({ navigation }) => (
  <SafeAreaView>
    <Text className="font-bold text-5xl ml-4 my-6">Standings</Text>
    <ScrollView>
      <HomeCard
        title="Drivers"
        image="https://cdn.gamekult.com/images/gallery/35/350383/f1-2020-pc-ps4-xone-2aaa63bb.png"
        navigation={navigation}
        page="Drivers"
      />
      <HomeCard
        title="Constructors"
        image="https://f1tcdn.net/gallery/var/resizes/2017/ferrari-sf70h/ferrari-sf70h.png"
        navigation={navigation}
        page="Constructors"
      />
    </ScrollView>
  </SafeAreaView>
);
