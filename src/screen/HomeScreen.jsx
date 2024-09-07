import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreens</Text>
      <MaterialCommunityIcons name={"account"} size={25} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
