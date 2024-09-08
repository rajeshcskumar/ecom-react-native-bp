import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../components/Header'
import CartCards from '../components/CartCards'
import { CartContext } from '../context/CartContext'

const CartScreen = () => {
    const {carts} = useContext(CartContext);
  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
        <View style={styles.headerContainer}>
            <Header isCart={true}/>
        </View>
        {/* <CartCards/>
        <CartCards/> */}
        <FlatList data={carts} ListHeaderComponent={
            <>
                
            </>
        } renderItem={CartCards} ListFooterComponent={
            <>
                <View style={styles.priceContainer}>
                    <View style={styles.priceAndTitle}>
                        <Text style={styles.text}>Total:</Text>
                        <Text style={styles.text}>$119.5</Text>
                    </View>
                    <View style={styles.priceAndTitle}>
                        <Text style={styles.text}>Shipping:</Text>
                        <Text style={styles.text}>$0</Text>
                    </View>
                </View>
            </>
        } showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50 }}/>
        
        <View style={styles.divider}/>
        <View style={styles.priceAndTitle}>
            <Text style={styles.text}>Grand Total:</Text>
            <Text style={[styles.text, {color: "#3C3C3C", fontWeight: "700"}]}>$119.5</Text>
        </View>
        <TouchableOpacity style={styles.checkoutContainer}>
            <Text style={styles.btnText}>Checkout</Text>
        </TouchableOpacity>
    </LinearGradient>
  )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    headerContainer: {
        marginBottom: 20
    },
    priceContainer: {
        marginTop: 30
    },
    priceAndTitle: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        marginVertical: 10
    },
    text: {
        color: "#757575",
        fontSize: 18
    },
    divider: {
        borderWidth: 1,
        borderColor: "#C0C0C0",
        marginHorizontal: 10,
        marginVertical: 10
    },
    checkoutContainer: {
        backgroundColor: "#E96E6E",
        width: "100%",
        marginVertical: 20,
        borderRadius: 10
    },
    btnText: {
        fontSize: 25,
        color: "white",
        textAlign: "center",
        padding: 10
    }
})