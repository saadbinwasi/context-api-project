import React, { useContext } from 'react'
import { Cart } from '../Context'

const Singleproduct = ({product}) => {
    const {cart,setCart} = useContext(Cart)
  return (
    <div  className="product-item">
    <img src={product.image} alt={product.name} />
    <h2>{product.name}</h2>
    <p>${product.price}</p>
    {cart.includes(product) ? (
        <button onClick={() => {setCart(cart.filter((c)=>c.id!==product.id))}}
     className='btn'>Remove From Cart</button>
    ): (
        <button onClick={() => {setCart([...cart,product])}} className='btn'>ADD TO CART</button>
    )}
   
    
  </div>
  )
}

export default Singleproduct
