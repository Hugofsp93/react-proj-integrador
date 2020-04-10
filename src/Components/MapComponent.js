import React, { useState, useEffect } from 'react';

import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

function MapComponent(props) {

  const [currentLocation, setCurrentLocation] = useState({ lat: -21.805149, lng: -49.0921657 })

  useEffect(function () {
    getGeoLocation()
  }, [])

  function getGeoLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
        }
      )
    }
  }

  return (
    <Map
      google={props.google}
      zoom={8}
      initialCenter={currentLocation}>
      <Marker />
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCwdO8UDInTP_xFP3oIMpZYcccCMN3Cs1c'
})(MapComponent);