import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import Header from '../../components/header';
import Banner from '../../components/banner';
import Search from '../../components/search';
import Section from '../../components/section';
import TrendingFoods from '../../components/trending';
import Restaurants from '../../components/restaurants';
import RestaurantsVerticalList from '../../components/restaurants/vertical-list';

const statusBarHeight = Constants.statusBarHeight;

export default function HomeView() {
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

        <Section 
          name="Restaurantes famosos"
          label="Veja todos"
          size="text-xl"
          action={() => console.log("Veja todos")}
        />

        <Restaurants />

        <Section 
          name="Restaurantes"
          label="Veja todos"
          size="text-xl"
          action={() => console.log("Veja todos")}
        />

        <RestaurantsVerticalList />
      </View>
    </ScrollView>
  );
}