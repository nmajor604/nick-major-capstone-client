import React from "react";
// import './Listings.scss';
import axios from "axios";
import ListingsDetail from './components/ListingDetail/ListingDetail';

class Listings extends React.Component {
    state = {
        currentListings: [],
    };

    componentDidMount() {
        axios.get('http://localhost:5050/listings').then((res) => {
            this.setState({ currentListings: res.data });
        });
    }

    render(){
        return(
            <>
                <div>
                    <h1>Listings</h1>
                    <div>
                        {this.state.currentListings.map((item) => (
                            <ListingsDetail />
                        ))}

                    </div>
                    
                </div>
            </>
        )
    }
}

export default Listings;