import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';
export default function Login(){
  return(
    <div className='login-bg'>
      <div className='login'>
      <form action=""/>
        <input id="login-user" placeholder="Email ou nome de usuário"/>
        <input id="login-password" placeholder="Senha" type="password"/>
        <input type="submit" value="Entrar" className="send-button"/>
        <Link className='link' to='/esqueci-a-senha'>Esqueceu sua senha?</Link>
        <Link className='link' to='/registro' id='password-button'>Criar nova conta</Link>
      </div>
  </div>
  );
}