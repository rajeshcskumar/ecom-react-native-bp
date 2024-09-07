import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Category = ({item,selectedCategory,setSelectedCategory}) => {
  return (
    <View>
      <Text style={[styles.categoryText, selectedCategory === item && {
        color: "#FFFFFF",
        backgroundColor: "#E96E6E"
      }]}>{item}</Text>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
    categoryText: {
        fontSize: 16,
        fontWeight: "600",
        // color: "#FFFFFF",
        color: "#938F8F",
        // backgroundColor: "#E96E6E",
        backgroundColor: "#DFDCDC",
        textAlign: 'center',
        borderRadius: 16,
        marginHorizontal: 10,
        paddingHorizontal: 20,
        paddingVertical: 10
    }
})