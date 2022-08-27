import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ImageUpload from '../ImageUpload/ImageUpload';
import { Button } from 'semantic-ui-react'


import './NewListing.css';

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
    

    render(){
        return(
            <>
                <div className='signup__container'>
                    <form className="form__signup" onSubmit={this.handleSubmit}>
                    <div><h4>Start Selling!</h4></div>
                    <div><p>All fields are required, as well as at least one photo.</p></div>
                    <div>
                                <input
                                    placeholder='Write a descriptive and catchy headline for your listing'
                                    name='title'
                                />
                            </div>
                            <div>
                                <input
                                    placeholder='Enter a one word description of the item condition'
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
                    
                    <button className='ui button primary'>
                        <p>Login</p>
                    </button>
                    <Link to="/">
                        <p>Cancel</p>
                    </Link>
                </form>               
                </div>
                
            </>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            // <>
                
            //     <div className='form__container'>
            //             <h4 className='content__header--title'>New Listing</h4>

            //             <p>All fields are required, as well as uploading at least one photo.</p>

            //             <form onSubmit={this.handleSubmit} className='form__body'>
            //                 <div>
            //                     <input
            //                         placeholder='Write a descriptive and catchy headline for your listing'
            //                         name='title'
            //                     />
            //                 </div>
            //                 <div>
            //                     <input
            //                         placeholder='Enter a one word description of the item condition'
            //                         name='condition'
            //                     />
            //                 </div>
            //                 <div>
            //                     <input
            //                         placeholder='Enter your city'
            //                         name='location'
            //                     />
            //                 </div>
            //                 <div>
            //                     <input
            //                         placeholder='Write a brief description'
            //                         name='description'
            //                     />
            //                 </div>
            //                 <div>
            //                     <input
            //                         placeholder='Name a price'
            //                         name='price'
            //                     />
            //                 </div>
                            
                            
            //                 <button>
            //                     <p>Post Your Item</p>
            //                 </button>
            //                 <Link to="/">
            //                     <p>Cancel</p>
            //                 </Link>
            //                 <ImageUpload />
            //                 <Button content='Primary' primary />

            //             </form>
            //     </div>
            // </>
        )
    }
}

export default NewListing;