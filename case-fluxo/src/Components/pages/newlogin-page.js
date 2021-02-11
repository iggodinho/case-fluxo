import React from 'react';
import Footer from '../Footer/footer';
import HeaderContainer from '../Header-container/header-container';
import NewLogin from '../New-login/newlogin';

export default function NewLoginPage(){
  return(
    <div>
      <HeaderContainer/>
      <NewLogin/>
      <Footer/>
    </div>
  );
}