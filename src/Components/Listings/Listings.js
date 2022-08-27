import React from "react";
import { Link } from 'react-router-dom';
// import './Listings.scss';
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
            <div>
                {this.state.currentListings.map((item) => (
                <>
                  
                  <div key={item.id}>
                    {item.title}
                    
                  </div>
                  
                  <div>{item.category}</div>
                  <div>{item.price}</div>
                  <div>
                    
                    <Link to={`/listings/${item.id}`}>
                      <p>See More</p>
                    </Link>
                  </div>
                </>
              ))}
            </div>
            
                    
                
            
        )
    }
}

export default Listings;