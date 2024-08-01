import React, { useContext, useEffect, useState } from 'react';
import Singleproduct from './Singleproduct';
import { Cart } from '../Context';

const CartPage = () => {
    const {cart,setCart} = useContext(Cart)

const [total,setTotal] = useState()

useEffect(() => {
    setTotal(cart.reduce((acc,curr) => acc + Number(curr.price),0))
},[cart]);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cart.map((product) => (
          <Singleproduct product={product} key={product.id}/>
          ))}
        </div>
      )}

      <div className="cart-total">
        <h3>Total: ${total}</h3>
      </div>
    </div>
  );
};

export default CartPage;
