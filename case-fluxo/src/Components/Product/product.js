import React from 'react';
import './product.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
export default function Product({name,price,type,image,id}){
  const [counter,setCounter]=React.useState(0);
  
  function increment(){
    setCounter(counter+1);
  }
  return(
    <div className='product-bg'>
      <div className='product-img'>
        <img src={image}/>
      </div>
      <div className='product-info'>
        <h4 className='product-name'>{name}</h4>
        <p className='product-type'>{type}</p>
        <p className='product-price'>R$ {price}</p>

        <button className='product-button' onClick={increment}><AiOutlineShoppingCart className='icon' id='product-cart'/>Adicionar</button>
      </div>
    </div>
  );
}