import React from 'react';
import './shoppinglist.css';
import Onion from '../../Assets/cebola.jpg';
import Tomatoe from '../../Assets/tomate.jpg';
import Lettuce from '../../Assets/alface.jpg';
import Carrot from '../../Assets/cenoura.jpg';
import Banana from '../../Assets/banana.jpg';
import Potato from '../../Assets/batata.jpg';
import Pineapple from '../../Assets/abacaxi.jpg';
import Yam from '../../Assets/inhame.jpg';
import Kiwi from '../../Assets/kiwi.jpg';
import Lemon from '../../Assets/limao.jpg';
import Melon from '../../Assets/melao.jpg';
import Strawberry from '../../Assets/morango.jpg';
import Pepper from '../../Assets/pimentao.jpg';
import Grape from '../../Assets/uva.jpg';



import Product from '../Product/product';
export default function ShoppingList({}){
  const list=[
    {
      name:'Abacaxi',
      price: 12.30,
      type:'Fruta',
      image: Pineapple,
      id:1
    },
    {
      name:'Alface',
      price: 9.65,
      type:'Vegetal',
      image: Lettuce,
      id:2
    },
    {
      name:'Banana',
      price: 6.95,
      type:'Fruta',
      image: Banana,
      id:3
    },
    {
      name:'Batata doce',
      price: 10.50,
      type:'Legume',
      image: Potato,
      id:4
    },
    {
      name:'Cebola',
      price: 12.30,
      type:'Legume',
      image: Onion,
      id:5
    },
    {
      name:'Cenoura',
      price: 5.90,
      type:'Legume',
      image: Carrot,
      id:6
    },
    {
      name:'Inhame',
      price: 13.00,
      type:'Legume',
      image: Yam,
      id:7
    },
    {
      name:'Kiwi',
      price: 11.15,
      type:'Fruta',
      image: Kiwi,
      id:8
    },
    {
      name:'Limão',
      price: 4.40,
      type:'Fruta',
      image: Lemon,
      id:9
    },
    {
      name:'Melão',
      price: 14.60,
      type:'Fruta',
      image: Melon,
      id:10
    },
    {
      name:'Morango',
      price: 9.35,
      type:'Fruta',
      image: Strawberry,
      id:11
    },
    {
      name:'Pimentão',
      price: 12.30,
      type:'Legume',
      image: Pepper,
      id:12
    },
    {
      name:'Tomate',
      price: 8.30,
      type:'Legume',
      image: Tomatoe,
      id:13
    },
    {
      name:'Uva',
      price: 3.50,
      type:'Fruta',
      image: Grape,
      id:14
    }
  ]
  const renderList = list.map((item) => (
    <Product name={item.name}  price={item.price} type={item.type} image={item.image} id={item.id} key={item.id.toString()}/>
    ));
    
  return(
    <div className='products-list'>
      {renderList}
    </div>
  );
}