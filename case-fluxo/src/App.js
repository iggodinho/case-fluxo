import React from 'react';
import './App.css';
import HeaderContainer from './Components/Header-container/header-container';
import ShoppingList from './Components/ShoppingList/shoppinglist';
export default function App(){
  return(
    <div>
      <HeaderContainer/>
      <ShoppingList/>
    </div>
  );
}