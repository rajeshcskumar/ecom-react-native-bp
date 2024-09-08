import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screen/HomeScreen";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import ProductDetailScreen from "./src/screen/ProductDetailScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from "./src/screen/CartScreen";
import { CartContext, CartProvider } from "./src/context/CartContext";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyHomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="">
      <Stack.Screen name="HOME" component={HomeScreen} />
      <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailScreen} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#E96E6E",
        }}
        initialRouteName="CART"

      >
        <Tab.Screen
          name="HOME_STACK"
          component={MyHomeStack}
          options={{
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Text>
                  <Entypo name={"home"} size={size} color={color} />
                </Text>
              );
            },
          }}
        />
        <Tab.Screen
          name="REORDER"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Text>
                  <MaterialIcons name={"reorder"} size={size} color={color} />
                </Text>
              );
            },
          }}
        />
        <Tab.Screen
          name="CART"
          component={CartScreen}
          options={{
            tabBarIcon: ({ size, focused, color }) => {
              const {carts} = React.useContext(CartContext)
              return (
                <View >
                  <MaterialCommunityIcons
                    name={"cart"}
                    size={size}
                    color={color}
                  />
                  <View style={{
                          position: "absolute",
                          right: -3,
                          bottom: 22,
                          height: 14,
                          width: 14,
                          backgroundColor: "#E96E6E",
                          borderRadius: 7,
                          alignItems: "center",
                          justifyContent: "center",
                        }}>
                    <Text style={{ color: "white", fontSize: 10 }}>{carts.length}</Text>
                  </View>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="ACCOUNT"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Text>
                  <FontAwesome6 name={"user"} size={size} color={color} />
                </Text>
              );
            },
          }}
        />
      </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
