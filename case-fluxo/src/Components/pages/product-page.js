import React from 'react';

import Footer from '../Footer/footer';
import HeaderContainer from '../Header-container/header-container';
import ShoppingList from '../ShoppingList/shoppinglist';



export default function ProductPage(){
  return(
    <div>
      <HeaderContainer/>
      <ShoppingList/>
      <Footer/>
    </div>
  );
}