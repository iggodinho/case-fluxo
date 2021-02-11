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

/*Component pra mostrar a quantidade de tal item adicionado no carrinho e o preço total, como a informação seria passada pra outro component que não é filho, provavelmente não é algo que eu vou conseguir fazer com o conhecimento passado até agora, voltar nessa questão depois caso dê tempo.
*/