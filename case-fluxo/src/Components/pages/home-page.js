import React from 'react';
import Footer from '../Footer/footer';
import HeaderContainer from '../Header-container/header-container';
import Home from '../Home/home';

export default function HomePage(){
  return(
    <div>
      <HeaderContainer/>
      <Home/>
      <Footer/>
    </div>
  );
}