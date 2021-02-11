import React from 'react';
import Footer from '../Footer/footer';
import HeaderContainer from '../Header-container/header-container';
import ForgotPassword from '../Forgot-password/forgotpassword';

export default function ForgotPasswordPage(){
  return(
    <div>
      <HeaderContainer/>
      <ForgotPassword/>
      <Footer/>
    </div>
  );
}