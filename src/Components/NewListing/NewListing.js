import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ImageUpload from '../ImageUpload/ImageUpload';
import { Button } from 'semantic-ui-react'


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
            .post('http://localhost:5050/', {
                title: e.target.title.value,
                condition: e.target.condition.value,
                location: e.target.location.value,
                description: e.target.description.value,
                price: e.target.price.value,
                seller_id: '1',
                status: '1'
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
                <div className='form__container'>
                    <div className='form__instructions'>
                        <p>All fields are required to be filled out, as well as uploading at least one photo.</p>
                    </div>
                    <div className='form__body'>
                        <form onSubmit={this.handleSubmit}>
                            <label>Title</label>
                            <input
                                placeholder='Write a descriptive and catchy headline for your listing'
                                name='title'
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
                            <ImageUpload />
                            <Button content='Primary' primary />

                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default NewListing;