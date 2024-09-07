import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screen/HomeScreen";

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HOME" component={HomeScreen} />
        <Tab.Screen name="REORDER" component={SettingsScreen} />
        <Tab.Screen name="CART" component={SettingsScreen} />
        <Tab.Screen name="ACCOUNT" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
