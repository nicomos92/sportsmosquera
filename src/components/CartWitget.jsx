import { CartContext } from '../context/cartContext';

import { useContext } from 'react';

const CartWidgetComponent =() =>{

    const { cart } = useContext(CartContext)

    return(
        <>
        <img
            alt=""
            src="carritodecompras.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
        />
        <span> {cart.length}</span>
        </>
        
    )
}

export default CartWidgetComponent;
