import { View, ScrollView } from "react-native";
import Header from "../components/header";

import Constants from "expo-constants";
import Banner from "../components/banner";
import Search from "../components/search";
import Section from "../components/section";
import TrendingFoods from "../components/trending";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView 
      style={{ flex: 1 }} 
      className="bg-slate-200" 
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />

        <Banner />

        <Search />

        <Section 
          name="Comidas em alta"
          label="Veja mais"
          size="text-2xl"
          action={() => console.log("Veja mais")}
        />

        <TrendingFoods />
      </View>
    </ScrollView>
  );
}
