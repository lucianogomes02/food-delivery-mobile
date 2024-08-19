import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import OrdersView from '../pages/orders';
import CartView from '../pages/cart';
import HomeView from '../pages/home';


const Tab = createBottomTabNavigator();

export default function TabRoutes() {
 return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Tab.Screen 
            name="home" 
            component={HomeView}
            options={{
                tabBarIcon: ({ color }) => (
                    <Feather name="home" size={24} color={color} />
                ),
                tabBarLabel: "Início"
            }}
        />

        <Tab.Screen 
            name="orders" 
            component={OrdersView}
            options={{
                tabBarIcon: ({ color }) => (
                    <Feather name="shopping-bag" size={24} color={color} />
                ),
                tabBarLabel: "Pedidos"
            }}
        />

        <Tab.Screen 
            name="cart" 
            component={CartView} 
            options={{
                tabBarIcon: ({ color }) => (
                    <Feather name="shopping-cart" size={24} color={color} />
                ),
                tabBarLabel: 'Carrinho'
            }}
        />
    </Tab.Navigator>
  );
}