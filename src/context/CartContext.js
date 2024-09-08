import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        loadCartItems();
    }, [])

    const loadCartItems = async () => {
        let carts = await AsyncStorage.getItem('carts');
        carts = carts ? JSON.parse(carts) : [];
        setCarts(carts);
    }
    const addToCart = async (item) => {
        const itemExists = carts.findIndex((cart) => cart.id === item.id);
        if(itemExists === -1) {
            const newCartItems = [...carts, item];
            await AsyncStorage.setItem('carts', JSON.stringify(newCartItems))
            setCarts(newCartItems)
        }
    }
    const value = {
        carts,
        addToCart
    };
    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>)
}