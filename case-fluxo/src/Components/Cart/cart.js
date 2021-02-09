import React from 'react';
import './cart.css';

export default function Cart({data}){
  return(
    <div className='cart-qtd'>
      Quantidade no carrinho: {data}
    </div>
  );
}
