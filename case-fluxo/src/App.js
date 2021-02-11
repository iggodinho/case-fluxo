import React from 'react';
import './App.css';

import Footer from './Components/Footer/footer';
import HeaderContainer from './Components/Header-container/header-container';
import Routes from './Components/routes';
import ShoppingList from './Components/ShoppingList/shoppinglist';

export default function App(){
  return(
    <div>
      <Routes/>
    </div>
  );
}

