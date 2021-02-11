import React from 'react';
import Footer from '../Footer/footer';
import HeaderContainer from '../Header-container/header-container';
import Login from '../Login/login';

export default function LoginPage(){
  return(
    <div>
      <HeaderContainer/>
      <Login/>
      <Footer/>
    </div>
  );
}