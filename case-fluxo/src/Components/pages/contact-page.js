import React from 'react';
import Footer from '../Footer/footer';
import HeaderContainer from '../Header-container/header-container';
import Contact from '../Contact/contact';

export default function ContactPage(){
  return(
    <div>
      <HeaderContainer/>
      <Contact/>
      <Footer/>
    </div>
  );
}