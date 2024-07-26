import { InfoWindow, Map, Marker } from "@vis.gl/react-google-maps";
import React, { useState, useEffect } from "react";
import globalStyles from "../../styles/GloblStyles";

/**
 * MapWithUpdateableCenter component
 *
 * This component renders a Google Map component with forced re-renders.
 * This is because to utilize the map being updated with locations and
 * being draggable, it was necessary to override defaultCenter
 * instead of the buggy center prop.
 *
 * @param {Object} props - The component props
 * @param {Object} props.initialCenter - The initial center position of the map
 * @param {Array} props.locations - List of location objects to be displayed as markers on the map
 * @param {function} props.onMarkerClick - Function to handle marker click events
 * @param {Object} props.selectedLocation - The currently selected location to display in the InfoWindow
 * @param {function} props.onInfoWindowClose - Function to handle closing the InfoWindow
 * @returns {JSX.Element} The MapWithUpdateableCenter component
 */
const MapWithUpdateableCenter = ({
  initialCenter,
  locations,
  onMarkerClick,
  selectedLocation,
  onInfoWindowClose,
}) => {
  const [center, setCenter] = useState(initialCenter);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (initialCenter !== center) {
      setCenter(initialCenter);
      setKey((prevKey) => prevKey + 1);
    }
  }, [initialCenter]);

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
            <p style={globalStyles.subtitle}>{selectedLocation.address}</p>
          </div>
        </InfoWindow>
      )}
    </Map>
  );
};

export default MapWithUpdateableCenter;
