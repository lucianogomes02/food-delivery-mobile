import { View, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { RestaurantProps } from '..';
import RestaurantItem from './restaurant-item';

export default function RestaurantsVerticalList() {
    const [restaurants, setRestaurants] = useState<RestaurantProps[]>([]);

    useEffect(() => {
        async function getRestaurants() {
            const response = await fetch('http://localhost:3000/restaurants');
            const data = await response.json();
            setRestaurants(data);
        }

        getRestaurants();
    }, []);

 return (
   <View className="px-4 flex-1 w-full h-full mb-11 gap-4">
    {restaurants.map((restaurant) => (
        <RestaurantItem restaurant={restaurant} key={restaurant.id}/>
    ))}
   </View>
  );
}