import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// import './NewSeller.scss';

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
                <div className='signup__header'>
                    <h4 className='signup__header--title'>New Seller Sign Up</h4>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input
                        placeholder='Choose an unique seller name'
                        name='name'
                    />
                    <label>Location</label>
                    <input
                        placeholder='Enter your city'
                        name='location'
                    />
                    <label>Email</label>
                    <input
                        placeholder='Enter your email address'
                        name='email'
                    />
                    <button>
                        <p>Sign Up and Start Selling!</p>
                    </button>
                    <Link to="/">
                        <p>Cancel</p>
                    </Link>
                </form>               
            </>
        )
    }
}

export default NewSeller;