import React, { useState, useEffect } from 'react';

import GoogleMapReact from 'google-map-react';
import { fitBounds } from 'google-map-react/utils';

// components:
import Marker from '../Components/MarkerComponent';
import mapStyle from '../assets/mapStyle.json'

export default function MapComponent(props) {

  const [currentLocation, setCurrentLocation] = useState({ lat: -21.805149, lng: -49.0921657 })
  const [places, setPlaces] = useState(props.places || [])
  const [center, setCenter] = useState({ lat: -21.805149, lng: -49.0921657 })
  const [zoom, setZoom] = useState(11)
  const [map, setMaps] = useState(null)
  const [googlemaps, setGooglemaps] = useState(null)

  useEffect(function () {
    getGeoLocation()
    setPlaces(props.places)
    handlerPlaces()
  }, [props.places, currentLocation, map, googlemaps])

  function handlerPlaces() {
    if (props.places !== places)
      setMarkers(props.places)
  }

  const getGeoLocation = () => {
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

  const createMapOptions = (maps) => {
    return {
      zoomControl: false,
      mapTypeControlOptions: {
        position: maps.ControlPosition.TOP_RIGHT
      },
      mapTypeControl: false,
      styles: mapStyle
    }
  }

  const distanceToMouse = (pt, mousePos, markerProps) => {
    if (pt && mousePos) {
      return Math.sqrt(
        (pt.x - mousePos.x) * (pt.x - mousePos.x) +
        (pt.y - mousePos.y) * (pt.y - mousePos.y)
      )
    }
  }

  const handlerMarker = (institution) => {
    institution.name && (props.openInstitution(institution))
  }

  const setMarkers = (mapMarkers) => {
    if (mapMarkers.length > 0) {

      const bounds = new googlemaps.LatLngBounds()

      mapMarkers.forEach(marker => {
        bounds.extend(new googlemaps.LatLng(marker.location.lat, marker.location.lng));
      });

      const ne = bounds.getNorthEast()
      const sw = bounds.getSouthWest()
      const nw = { lat: ne.lat(), lng: sw.lng() }
      const se = { lat: sw.lat(), lng: ne.lng() }
      const { center, zoom } = fitBounds({
        se: { lat: se.lat, lng: se.lng },
        nw: { lat: nw.lat, lng: nw.lng }
      }, { width: 500, height: 500 })

      map.fitBounds(bounds);

      setZoom(zoom)
      setCenter(center)
    }
  }

  const apiIsLoaded = (map, maps, places) => {
    setMaps(map)
    setGooglemaps(maps)
  };

  const renderPlaces = (institutions) => {
    return institutions.map((place, key) =>
      <Marker
        key={key}
        lat={place.location.lat}
        lng={place.location.lng}
        text="My Marker"
        onClick={() => handlerMarker(place)}
      />
    )
  }

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCwdO8UDInTP_xFP3oIMpZYcccCMN3Cs1c" }}
        center={center}
        defaultCenter={currentLocation}
        options={createMapOptions}
        defaultZoom={11}
        zoom={zoom}
        distanceToMouse={distanceToMouse}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => { apiIsLoaded(map, maps) }}
      >
        {renderPlaces(places)}
      </GoogleMapReact>
    </div>
  );
}