import { CartContext } from '../context/cartContext';

import { useContext } from 'react';

const CartWidgetComponent =() =>{

    const { cart } = useContext(CartContext)

    return(
        <>
        <span className='.text-white'> {cart.length} </span>
        
        <img
            alt=""
            src="../carritodecompras.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
        />
        </>
        
    )
}

export default CartWidgetComponent;
