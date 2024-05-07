import React from 'react'
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import CartElements from './CartElements'
import CartTotal from './CartTotal';
import Navbar from '../Navbar/Navbar';

import "./CartContent.css";

const CartContent = () => {
    const {cart} = useContext(dataContext);

    //condicion ? "" : ""
return (
    <>
    <Navbar/>
    {cart.length > 0 ? (
        <>
        <CartElements/>
        <CartTotal/>
        </>
    ) : (
        <h2 className='cart-msg'>Carrito vacio</h2>
    )}
    </>
)

 
};

export default CartContent