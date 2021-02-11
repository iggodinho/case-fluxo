import React from 'react';

import Footer from '../Footer/footer';
import HeaderContainer from '../Header-container/header-container';
import Payment from '../Payment/payment';



export default function PaymenttPage(){
  return(
    <div>
      <HeaderContainer/>
      <Payment/>
      <Footer/>
    </div>
  );
}