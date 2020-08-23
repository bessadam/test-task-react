import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { SignPage } from './pages/SignPage';
import { Terminal}  from './pages/Terminal';
import {Buyers} from './pages/Buyers/Buyers';
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer';
import {UserProvider} from './context/UserContext';
import { BuyerProfile } from './pages/Buyers/BuyerProfile';
import { ErrPage } from './components/errPage';


function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <Navbar/>
        <div className = "container pt-4">
          <Switch>
            <Route path="/" exact component={SignPage}/>
            <Route path = "/terminals" component = {Terminal}/>
            <Route path = "/buyers" component = {Buyers}/>
            <Route path = '/profile' component = {BuyerProfile}/>
            <Route path = "/err" component={ErrPage}/>
            <Redirect to = "/err"/>
          </Switch>
        </div>
        <Footer/>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
