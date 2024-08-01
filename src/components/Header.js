import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Cart } from '../Context'

const Header = () => {
    const {cart,setCart} = useContext(Cart)
  return (
    <div className='navbar'>
     
     <div className='list'>
     <span>Context Api Project :)</span>
        <Link to='/'>Home</Link>
        <Link to='/cart'>Cart ({cart.length})</Link>
     </div>
    </div>
  )
}

export default Header
