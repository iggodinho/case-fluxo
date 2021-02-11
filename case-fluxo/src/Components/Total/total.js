import React from 'react';
import './total.css';

export default function Total({qtd,name,price}){
  const total=Math.round((price*qtd) * 100) / 100;
  return(
    <div className='total-bg'>
      <div className='total'>
        <h3>Produtos:{qtd}x {name} </h3>
        <h3>Total:{total}</h3>
      </div>
    </div>
  );
}