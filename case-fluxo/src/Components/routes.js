import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import ProductPage from './pages/product-page';
import HomePage from './pages/home-page';
import ContactPage from './pages/contact-page';
import LoginPage from './pages/login-page';
import NewLoginPage from './pages/newlogin-page';
import ForgotPasswordPage from './pages/forgotpassword-page';
import PaymentPage from './pages/payment-page';

export default function Routes(){
  return(
    <div>
     <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/produtos' component={ProductPage}/>
        <Route path='/login' component={LoginPage}/>
        <Route path='/contato' component={ContactPage}/>
        <Route path='/registro' component={NewLoginPage}/>
        <Route path='/esqueci-a-senha' component={ForgotPasswordPage}/>
        <Route path='/pagamento' component={PaymentPage}/>

      </Switch>
    </BrowserRouter>
    </div>
  );
}
