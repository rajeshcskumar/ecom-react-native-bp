import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../components/Header'
import { useNavigation, useRoute } from '@react-navigation/native';
import { CartContext } from '../context/CartContext';

const imageUrl =
    "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/vulb5bckiruhpzt2v8ec.png";
const colorsArray = [
  "#91A1B0",
  "#B11D1D",
  "#1F44A3",
  "#9F632A",
  "#1D752B",
  "#000000",
];
const sizes = ['S','M', 'L', 'XL']
const ProductDetailScreen = () => {
  const navigation = useNavigation();
  const {addToCart} = useContext(CartContext)
  const route = useRoute();
  const product = route.params.item;
  

  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)
  const handleAddToCart = (item) => {
    item.size = selectedSize
    item.color = selectedColor
    addToCart(item)
    navigation.navigate('CART')
  }
  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
      <View style={styles.headerContainer}>
        <Header/>
      </View>
      <Image source={{ uri: product.image }} style={styles.coverImg}/>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={[styles.title,styles.price]}>${product.price}</Text>
      </View>
      <Text style={[styles.title,styles.sizeText]}>Size</Text>
      <View style={styles.sizeContainer}>
        {
          sizes.map((size) => {
            return(
              <TouchableOpacity style={styles.sizeValueContainer} onPress={() => {
                setSelectedSize(size  )
              }}>
                <Text style={[styles.sizeValue, selectedSize == size && {
                  color: "#E55B5B"
                } ]}>{size}</Text>
              </TouchableOpacity>
            )
          })
        }
      </View>
      <Text style={[styles.title,styles.colorText]}>Colors</Text>
      <View style={styles.colorContainer}>
        {
          colorsArray.map((color) => {
            return(
              <TouchableOpacity onPress={() => {setSelectedColor(color)}} style={[styles.circleBorder, selectedColor === color && {borderColor: color,    borderWidth: 2              }]}>
                <View style={[styles.circle, {backgroundColor: color}]}></View>
              </TouchableOpacity>
            )
          })
        }
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {handleAddToCart(product)}}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    padding:20
  },
  coverImg: {
    width: "100%",
    height: 330
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    color: "#444444",
    fontWeight: "500"
  },
  price: {
    color: "#4D4C4C"
  },
  sizeText: {
    marginHorizontal: 20,

  },
  sizeContainer: {
    flexDirection: "row",
    marginHorizontal: 20
  },
  sizeValueContainer: {
    height: 36,
    width: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 10
  },
  sizeValue: {
    fontSize: 18,
    color: "#444444",
    fontWeight: "600"
  },
  colorText: {
    marginHorizontal: 20,
    marginTop: 10
  },
  circle: {
    height: 36,
    width: 36,
    borderRadius: 18,
  },
  colorContainer: {
    flexDirection: "row",
    marginHorizontal: 20
  },
  circleBorder: {
    height: 48,
    width: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 3
  },
  button: {
    backgroundColor: "#E96E6E",
    padding: 10,
    margin: 10,
    borderRadius: 20

  },
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
    textAlign: "center"
  },
})