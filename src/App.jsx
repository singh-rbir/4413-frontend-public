import React from 'react';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Profile from './components/Profile';

import Cart from './components/Cart';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/shop" component={Shop} />
          <Route path="/profile" component={Profile} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/cart" component={Cart} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
