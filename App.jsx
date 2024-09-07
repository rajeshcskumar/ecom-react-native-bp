import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screen/HomeScreen";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#E96E6E",
        }}
      >
        <Tab.Screen
          name="HOME"
          component={HomeScreen}
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
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Text>
                  <MaterialCommunityIcons
                    name={"cart"}
                    size={size}
                    color={color}
                  />
                </Text>
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
  );
}
