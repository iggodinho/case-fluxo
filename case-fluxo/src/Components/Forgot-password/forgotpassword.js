import React from 'react';
import { Link } from 'react-router-dom';
import {BsArrowLeftShort} from 'react-icons/bs';
import './forgotpassword.css';
export default function ForgotPassword(){
  return(
    <div className='login-bg'>
      <div className='login'>
        <Link className='link' to='/login'><BsArrowLeftShort className='back-to-login'/></Link>
        <div className='new-login'>
          <form action=""/>
            <input id="password-email" placeholder="Email"/>
            <input type="submit" value="Enviar" className="send-button"/>
        </div>
      </div>
      
    </div>
  );
}