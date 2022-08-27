import React from "react";
import { Link } from 'react-router-dom';
import './Listings.css';
import axios from "axios";
// import ListingDetail from '../ListingDetail/ListingDetail';

class Listings extends React.Component {
    state = {
        currentListings: [],
    };

    componentDidMount() {
        axios.get('http://localhost:5050/').then((res) => {
            this.setState({ currentListings: res.data });
            console.log(this.state.currentListings)
        });
    }

    render(){
        return(
          
            <div className="listing__container">
                {this.state.currentListings.map((item) => (
                <>
                  <div className="listing__card">
                    
                      <img className="listing__image"
                      src={item.image} 
                      alt="description"
                      width="100px" />
                    
                    <div className="listing__description">
                      <div key={item.id}>
                        <h1>{item.title}</h1>
                      </div>
                      <div>{item.description}</div>
                      <div>${item.price}</div>
                      <div>{item.location}</div>
                      <Link to={`/listings/${item.id}`}>
                        <p>BUY THIS ITEM</p>
                      </Link>
                    </div>
                  </div>
                  
                </>
              ))}
            </div>
          
            
            
                    
                
            
        )
    }
}

export default Listings;