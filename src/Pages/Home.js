import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/Card/ProductCard'
import {addItemToCart, removeProduct}  from '../Redux/Reducers/Cart.slice';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { saveItemsToStore } from '../Redux/Reducers/Products.slice';

import './pages.css';
import Navbar from '../Components/Navbar/Navbar';

export default function Home({}) {
  const [loading, setLoading] = useState(true);
  const dispatcher = useDispatch()
  const { items = [] } = useSelector((state) => {
  return state.food;

  });

  useEffect(() => {

    fetch("http://localhost:4000/pizzo")
    .then((response) => response.json())
    .then((data) => {
      
        dispatcher(saveItemsToStore(data))
      
    })
    .catch((err) => console.log(err));
    return () => {};
  }, []);
 

  const handleCart = (data) => {
    console.log(data);
    if(data.pizza) {
      dispatcher(addItemToCart(data));
    }
  } ;

  const handleCart2 = (data) => {
    console.log(data);
    if(data.pizza) {
      dispatcher(removeProduct(data));
    }
  } ;
  


  return (
    <div>
    <Navbar />
    <section id="product-listing-container" className='d-flex flex-column'>
    <h2 className='mb-3'>Todays Hot ({items.length})</h2>
    <div className="container text-center">
  <div className="row justify-content-around">
  {items.length > 0 ? ( items.map((product, index) => 
    <ProductCard key={`product-card-${index}`} data={product} 
    onAddToCart={handleCart} 
    onRemoveFromCart={handleCart2}
    />
   
    )
  ) : (
    <p>No Pizza Found</p>
  )}
  </div>
</div>
    </section>

    </div>
  )
}
