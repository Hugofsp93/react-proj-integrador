import React, { Component } from 'react';

import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentLatLng: { lat: -21.805149, lng: -49.0921657 }
    };

    this.getGeoLocation()
  }

  getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          console.log(position.coords);
          this.setState(prevState => ({
            currentLatLng: {
              ...prevState.currentLatLng,
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          }))
        }
      )
    }
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        initialCenter={this.state.currentLatLng}>
        <Marker />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCwdO8UDInTP_xFP3oIMpZYcccCMN3Cs1c'
})(MapComponent);