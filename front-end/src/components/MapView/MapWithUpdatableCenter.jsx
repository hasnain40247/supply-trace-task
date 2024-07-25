import { InfoWindow, Map, Marker } from '@vis.gl/react-google-maps';
import React, { useState, useEffect } from 'react';

const MapWithUpdateableCenter = ({ initialCenter, locations, onMarkerClick, selectedLocation, onInfoWindowClose }) => {
  const [center, setCenter] = useState(initialCenter);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (initialCenter !== center) {
      setCenter(initialCenter);
      setKey(prevKey => prevKey + 1);
    }
  }, [initialCenter]);

  const mapViewStyles = {
    // Your styles here
  };

  return (
    <Map
      key={key}
      defaultCenter={center}
      defaultZoom={15}
      disableDefaultUI={true}
    >
      {locations.map((location) => (
        <Marker
          key={location.location_id}
          position={{ lat: location.latitude, lng: location.longitude }}
          title={location.address}
          onClick={() => onMarkerClick(location)}
        />
      ))}
      {selectedLocation && (
        <InfoWindow
          position={{
            lat: selectedLocation.latitude,
            lng: selectedLocation.longitude,
          }}
          onCloseClick={onInfoWindowClose}
        >
          <div style={mapViewStyles.infoWindow}>
            <p style={mapViewStyles.subtitle}>
              {selectedLocation.address}
            </p>
          </div>
        </InfoWindow>
      )}
    </Map>
  );
};

export default MapWithUpdateableCenter;