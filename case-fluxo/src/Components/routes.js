import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import ProductPage from './pages/product-page';
import HomePage from './pages/home-page';
import ContactPage from './pages/contact-page';
import LoginPage from './pages/login-page';
import NewLoginPage from './pages/newlogin-page';
import ForgotPasswordPage from './pages/forgotpassword-page';

export default function Routes(){
  return(
    <div>
     <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/produtos' component={ProductPage}/>
        <Route path='/login' component={LoginPage}/>
        <Route path='/contato' component={ContactPage}/>
        <Route path='/new-login' component={NewLoginPage}/>
        <Route path='/forgot-password' component={ForgotPasswordPage}/>
      </Switch>
    </BrowserRouter>
    </div>
  );
}
