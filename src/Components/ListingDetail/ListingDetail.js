import React from 'react';

const ListingDetail = props => {
    const { listing } = props;
    return (
        <div>
            <h1>Listing</h1>
            <p>{listing.title}</p>
            <p>{listing.description}</p>
        </div>
    )
}

export default ListingDetail;