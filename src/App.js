import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Listings from './Components/Listings/Listings';
// import ListingDetail from './Components/ListingDetail/ListingDetail';
import Login from './Components/Login/Login';
import NewListing from './Components/NewListing/NewListing';
import NewSeller from './Components/NewSeller/NewSeller';
import SellerHome from './Components/SellerHome/SellerHome';
import Footer from './Components/Footer/Footer';


export default class App extends Component {

   

  render() {
    return (
          <Router>
            <Header />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/listings" component={Listings} />
                {/* <Route exact path="/listings/:id" component={ListingDetail} /> */}
                <Route exact path="/login" component={Login} />
                <Route exact path="/add-item" component={NewListing} />
                <Route exact path="/seller-signup" component={NewSeller} />
                <Route exact path="/seller-home" component={SellerHome} />
              </Switch>
            <Footer />
          </Router>
      );
    
  }
}