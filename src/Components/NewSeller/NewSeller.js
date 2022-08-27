import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './NewSeller.css';

class NewSeller extends React.Component {
    state = {
        selectedOption: ""
    };

    handleChange = (e) => {
        this.setState({selectedOption: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
            axios
            .post('http://localhost:5050/sellers', {
                name: e.target.name.value,
                location: e.target.location.value,
                email: e.target.email.value,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    
        e.target.reset();
        };
    

    render(){
        return(
            <>
                <div className='signup__container'>
                    <form className="form__signup" onSubmit={this.handleSubmit}>
                    <div><h4>Welcome! Sign Up Here!</h4></div>
                    <div>
                    <input
                        placeholder='Choose a unique seller name'
                        name='name'
                    />
                    </div>
                    <div>
                    <input
                        placeholder='Enter your city'
                        name='location'
                    />
                    </div>
                    <div>
                    <input
                        placeholder='Enter your email address'
                        name='email'
                    />
                    </div>
                    
                    <Link to="/add-item">
                        <button className='ui button primary'>
                            <p>Sign Up and Start Selling!</p>
                        </button>
                    </Link>
                    
                    <Link to="/">
                        <p>Cancel</p>
                    </Link>
                </form>               
                </div>
                
            </>
        )
    }
}

export default NewSeller;