import React from 'react';
import './payment.css';
export default function Payment(){
  return(
    <div className='payment-bg'>
      <div className='payment'>
        
        <div className='new-login'>
          <h3 id='payment-total'>Total: R$ 00.00</h3>
          
          <form action=""/>
            <input id="payment-name" placeholder="Nome completo"/>
            <input id="payment-email" placeholder="Email"/>
            <input id="payment-city" placeholder="Cidade"/>
            <input id="payment-adress" placeholder="Endereço" />
            <input id="payment-credit-number" placeholder="Número do cartão" />
            <input id="payment-credit-date" placeholder="Data de vencimento" />
            <input id="payment-credit-security" placeholder="Código de segurança" />
            <input type="submit" value="Finalizar pagamento" className="send-button"/>
        </div>
      </div>
      
    </div>
  );
}