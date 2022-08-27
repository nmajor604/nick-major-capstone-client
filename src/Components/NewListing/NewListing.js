import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ImageUpload from '../ImageUpload/ImageUpload';
import Map from '../Map/Map';

import './NewListing.css';

class NewListing extends React.Component {
    state = {
        selectedOption: "",
        userLocation: {}
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
                image: '',
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


    getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.setState({
                    userLocation: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    }
                })
                localStorage.setItem('userLocation', JSON.stringify({
                    lat: position.coords.latitude,
                        lng: position.coords.longitude, 
                }))
            })
        }
    }

    componentDidMount = () => {
        this.getUserLocation()
    }
    

    render(){
        return(
            <>
                <div className='signup__container'>
                    <form className="form__signup" onSubmit={this.handleSubmit}>
                    <div><h4>Start Selling!</h4></div>
                    <div><p>All fields are required, as well as at least one photo.</p></div>
                    <div>
                                <input
                                    placeholder='Write a descriptive headline'
                                    name='title'
                                />
                            </div>
                            <div>
                                <input
                                    placeholder='Enter item condition'
                                    name='condition'
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
                                    placeholder='Write a brief description'
                                    name='description'
                                />
                            </div>
                            <div>
                                <input
                                    placeholder='Name a price'
                                    name='price'
                                />
                            </div>
                    
                    
                    <Link to='/listings'>
                    <button className='ui button primary'>
                        <p>Post Your Item</p>
                    </button>
                    </Link>
                    <Link to="/">
                        <p>Cancel</p>
                    </Link>
                    <ImageUpload />
                    <Map userLocation={this.state.userLocation} />
                </form>               
                </div> 
            </>
        )
    }
}

export default NewListing;