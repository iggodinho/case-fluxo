import React from 'react';
import './contact.css';
export default function Contact(){
  return(
    <div className='contact-bg'>
      <div className="contact">
      
        <form action=""/>
        
        <input id="contact-email" placeholder="Email"/>
        <input id="contact-subject" placeholder="Assunto" />
        <textarea  id="contact-text" type="text" placeholder="Digite sua mensagem" />
        <input type="submit" value="Enviar" id='contact-submit'/>
      </div>
      
    </div>
  );
}