import React from 'react';
import './shoppinglist.css';
import Onion from '../../Assets/cebola.jpg';
import Tomatoe from '../../Assets/tomate.jpg';
import Lettuce from '../../Assets/alface.jpg';
import Carrot from '../../Assets/cenoura.jpg';
import Product from '../Product/product';
export default function ShoppingList({}){
  const list=[
    {
      name:'Cebola',
      price: 12.30,
      type:'Vegetal',
      image: Onion,
      id:1
    },
    {
      name:'Cenoura',
      price: 9.65,
      type:'Vegetal',
      image: Carrot,
      id:2
    },
    {
      name:'Alface',
      price: 12.30,
      type:'Vegetal',
      image: Lettuce,
      id:3
    },
    {
      name:'Tomate',
      price: 10.50,
      type:'Fruta',
      image: Tomatoe,
      id:4
    },
    {
      name:'Cebola',
      price: 12.30,
      type:'Vegetal',
      image: Onion,
      id:5
    },
    {
      name:'Cebola',
      price: 12.30,
      type:'Vegetal',
      image: Onion,
      id:6
    },
    {
      name:'Cebola',
      price: 12.30,
      type:'Vegetal',
      image: Onion,
      id:7
    }
  ]
  const renderList = list.map((item) => (
    <Product name={item.name}  price={item.price} type={item.type} image={item.image} id={item.id}/>
    ));
    
  return(
    <div className='products-list'>
      {renderList}
    </div>
  );
}