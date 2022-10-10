import React from "react";
import { useState } from "react";


const CartContext = React.createContext();

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        const existInCart = isInCart(item.id);
        if (existInCart) {
            const arrayCart = cart.filter((item) => item.id !== item.id);
            arrayCart.push(item);
            setCart(arrayCart);
        } else {
            setCart([...cart, item]);
        }
    }

    const removeItem = (id) => {
        setCart(cart.filter((itemAux) => itemAux.id !== id));
    }

    const isInCart = (itemId) => {
        return cart.find(item => item.id === itemId);
    }

    const clearItems = () => {
        setCart([]);
    }

    const total = () => {
        let total = 0;
        cart.forEach(item => {
            total = total + item.price * item.quantity;
        });    
        return total;
    };



    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearItems, total}}>
            {children}
        </CartContext.Provider>
    )

}

export {CartProvider, CartContext};