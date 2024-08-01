import React, { useContext, useState } from 'react';
import { faker } from '@faker-js/faker';
import Singleproduct from './Singleproduct';
import { Cart } from '../Context';


faker.seed(100);

const Home = () => {
    const { cart, setCart } = useContext(Cart);


  const productsArray = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.urlLoremFlickr({ category: 'products' }), 
  }));

const [products] = useState(productsArray)

console.log(productsArray)

  return (
    <div className='home'>
    
      <div className="product-list">
        {products.map((product) => (

            <Singleproduct key={product.id} product={product} cart={cart} setCart={setCart}/>
          
        ))} 
      </div>
    </div>
  );
};

export default Home;
