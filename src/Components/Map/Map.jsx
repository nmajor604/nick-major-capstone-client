import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

class Map extends Component {

    state = {
        center: {
            lat: 49.282730,
            lng: -123.120735,
        },
        zoom:12
    }

    centerMyLocation = () => {
        this.setState({
            center: {
                lat: this.props.userLocation.lat,
                lng: this.props.userLocation.lng,
            }
        })
    }

    render(){
        return(
            <div style={{width: 500, height: 400, margin: 'auto', marginTop:40}}>
                <GoogleMapReact
                    className='react-map'
                    bootstrapURLKeys={{key: 'AIzaSyDz7IBsAKFc8kkx8VPObQ-0-ggCH7VpKrU'}}
                    defaultCenter={{ lat: 49.282730, lng: -123.120735 }}
                    defaultZoom={this.state.zoom}
                    center={this.state.center}
        onChange={({center, zoom}) => {this.setState({center: center, zoom: zoom})}}
                    >

                    </GoogleMapReact>
                    <button onClick={() => this.centerMyLocation()}>My Location</button>
            </div>
            
        )
    }
};

export default Map;