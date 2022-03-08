import React, { useContext } from 'react';
import Context, { CartContextProvider } from '../../context/CartContext';

const Cart = () => {
    const { cart } = useContext(Context);

    return (
        <>
            {cart.map((prod) => (
                <li key={prod.id}>{prod.cantidad}</li>
            ))}
        </>
    );
};

export default Cart;
