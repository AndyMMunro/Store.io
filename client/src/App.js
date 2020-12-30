import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './components/pages/Cart';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
// import cart from '../../routes/api/cart';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/products' component={Products} />
          <Route path='/cart' component={Cart} />
        </Switch>
      </Router>
    </>
  );
}

export default App;