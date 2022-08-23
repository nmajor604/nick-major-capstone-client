import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// import './NewListing.scss';

class NewListing extends React.Component {
    state = {
        selectedOption: ""
    };

    handleChange = (e) => {
        this.setState({selectedOption: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
            axios
            .post('http://localhost:5050/listings', {
                title: e.target.name.title,
                condition: e.target.condition.value,
                location: e.target.location.value,
                description: e.target.description.value,
                price: e.target.price.value

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
                <div className='content__header'>
                    <h4 className='content__header--title'>New Listing</h4>
                </div>
                <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input
                    placeholder='Choose an unique seller name'
                    name='name'
                />
                <label>Condition</label>
                <input
                    placeholder='Enter a one word description of the item condition'
                    name='condition'
                />
                <label>Location</label>
                <input
                    placeholder='Enter your city'
                    name='location'
                />
                <label>Description</label>
                <input
                    placeholder='Write a brief description'
                    name='description'
                />
                <label>Price</label>
                <input
                    placeholder='Name a price'
                    name='price'
                />
                <button>
                    <p>Post Your Item</p>
                </button>
                <Link to="/">
                    <p>Cancel</p>
                </Link>
            </form>
            
            </>
            
        )
    }
}

export default NewListing;