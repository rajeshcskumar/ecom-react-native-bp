import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";


const imageUrl =
"https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/vulb5bckiruhpzt2v8ec.png";
const CartCards = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={styles.coverImage}/>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={[styles.title,styles.price]}>${item.price}</Text>
        <View style={styles.circleContainer}>
          <View style={[styles.circle, {backgroundColor: item.color}]}/>
          <View style={[styles.circle, {backgroundColor: "#FFFFFF"}]}>
            <Text style={styles.circleText}>{item.size}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity>
        <FontAwesome6 name="trash" color="#F68CB5" size = {22}/>
      </TouchableOpacity>

      
    </View>
  )
}

export default CartCards

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: "row"

  },
  coverImage: {
    height: 125,
    width: "25%",
    borderRadius: 20
  },
  cardContent: {
    flex: 1,
    marginHorizontal: 10
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "#444444",
    marginBottom: 20
  },
  price: {
    color: "#797979",
    marginBottom: 20
  },
  circleContainer: {
    flexDirection: "row",
  },
  circle: {
    height: 32,
    width: 32,
    borderRadius: 16,
    backgroundColor: "#7094C1",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15
  },
  circleText: {
    color: "#444444",
    fontSize: 18,
    fontWeight: "500"
  }
})