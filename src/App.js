import React, { Component } from 'react';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Listings from './Components/Listings/Listings';
import ListingsDetail from './Components/ListingsDetail/ListingsDetail';
import Login from './Components/Login/Login';
import NewListing from './Components/NewListing/NewListing';
import SellerHome from './Components/SellerHome/SellerHome';

export default class App extends Component {

  render() {
    return (
          <Router ref={this.routerRef}>
            <Header />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/listings" component={Listings} />
                <Route exact path="/listings/:id" component={ListingsDetail} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/add-item" component={NewListing} />
                <Route exact path="/seller-home" component={SellerHome} />
              </Switch>
            <Footer />
          </Router>
      );
    
  }
}