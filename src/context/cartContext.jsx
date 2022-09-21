/* TOCAMOS ACA */
import React, { useState } from 'react';

const CartContext = React.createContext();

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        setCart([...cart, item])
    }
    
    const eliminarTodo = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{cart, addItem, eliminarTodo}}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };


/* TOCAMOS ACA */

