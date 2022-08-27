import React from 'react';
import Map from '../Map/Map' 

// import NewListing from '../NewListing/NewListing';

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}

const SellerHome = () => (
      <Map location={location} zoomLevel={17} />

  
)

export default SellerHome;