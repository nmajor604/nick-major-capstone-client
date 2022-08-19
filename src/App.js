import React, { Component } from 'react';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Header from './Components/Header';
import ProductPage from './Components/ProductPage/ProductPage';
import SellersPage from './Components/SellersPage';
import About from './Components/About';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      listings: []
    };
  this.routerRef = React.createRef();
}

  render() {
    return (
        // <Context.Provider
        //   value={{
        //     ...this.state,
        //     removeFromCart: this.removeFromCart,
        //     addToCart: this.addToCart,
        //     login: this.login,
        //     addProduct: this.addProduct,
        //     clearCart: this.clearCart,
        //     checkout: this.checkout
        //   }}
        // >
          <Router ref={this.routerRef}>
          <div className="App">
            <nav
              className="navbar container"
              role="navigation"
              aria-label="main navigation"
            >
              <div className="navbar-brand">
                <b className="navbar-item is-size-4 ">ecommerce</b>
                <label
                  role="button"
                  class="navbar-burger burger"
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="navbarBasicExample"
                  onClick={e => {
                    e.preventDefault();
                    this.setState({ showMenu: !this.state.showMenu });
                  }}
                >
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </label>
              </div>
                <div className={`navbar-menu ${
                    this.state.showMenu ? "is-active" : ""
                  }`}>
                  <Link to="/products" className="navbar-item">
                    Products
                  </Link>
                  {this.state.user && this.state.user.accessLevel < 1 && (
                    <Link to="/add-product" className="navbar-item">
                      Add Product
                    </Link>
                  )}
                  <Link to="/cart" className="navbar-item">
                    Cart
                    <span
                      className="tag is-primary"
                      style={{ marginLeft: "5px" }}
                    >
                      { Object.keys(this.state.cart).length }
                    </span>
                  </Link>
                  {!this.state.user ? (
                    <Link to="/login" className="navbar-item">
                      Login
                    </Link>
                  ) : (
                    <Link to="/" onClick={this.logout} className="navbar-item">
                      Logout
                    </Link>
                  )}
                </div>
              </nav>
              <Switch>
                <Route exact path="/" component={ProductList} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/add-item" component={ListingUploadForm} />
                <Route exact path="/listings" component={ProductPage} />
              </Switch>
            </div>
          </Router>
        // </Context.Provider>
      );
    
  }
}