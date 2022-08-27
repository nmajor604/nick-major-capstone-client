import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value, error: "" });

  login = (e) => {
    e.preventDefault();

    const { username, password } = this.state;
    if (!username || !password) {
      return this.setState({ error: "Please fill all fields" });
    }
    this.props.login(username, password)
      .then((loggedIn) => {
        if (!loggedIn) {
          this.setState({ error: "Invalid Credentails" });
        }
      })
  };

  render() {
    return !this.props.user ? (
      <>
                <div className='signup__container'>
                    <form className="form__signup" onSubmit={this.handleSubmit}>
                    <div><h4>Welcome Back!</h4></div>
                    <div>
                    <input
                        placeholder='Enter your seller name'
                        name='name'
                    />
                    </div>
                    <div>
                    <input
                        placeholder='Enter your email address'
                        name='email'
                    />
                    </div>
                    
                    <button className='ui button primary'>
                        <p>Login</p>
                    </button>
                    <Link to="/">
                        <p>Cancel</p>
                    </Link>
                </form>               
                </div>
                
            </>
    ) : (
      <Link to="/seller-home" />
    );
  }
}

export default Login;