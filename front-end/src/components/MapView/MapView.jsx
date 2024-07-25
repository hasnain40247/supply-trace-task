import { useState } from "react";
import mapViewStyles from "./MapViewStyles";
import {
  APIProvider,
  InfoWindow,
  Map,
  Marker,
} from "@vis.gl/react-google-maps";
import MapWithUpdateableCenter from "./MapWithUpdatableCenter";

const MapView = ({ locations, center }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleMarkerClick = (loc) => {
    setSelectedLocation(loc);
  };
  const handleInfoWindowClose = () => {
    setSelectedLocation(null);
  };
  return (
    <div style={mapViewStyles.parentStyles} className="mapContainer">
      <div style={mapViewStyles.mapcontainer}>
        <APIProvider apiKey="AIzaSyAgAwyk7QltMFwzvoIId3upS9bH5zZx27U">
          {/* <Map
            defaultCenter={center}
            defaultZoom={13}

            disableDefaultUI={true}
          >
            {" "}
            {locations.map((location) => (
              <Marker
                key={location.location_id}
                position={{ lat: location.latitude, lng: location.longitude }}
                title={location.address}
                onClick={() => handleMarkerClick(location)}
          
              />
            ))}
            {selectedLocation && (
              <InfoWindow
                position={{
                  lat: selectedLocation.latitude,
                  lng: selectedLocation.longitude,
                }}
                onCloseClick={handleInfoWindowClose}
              >
                <div style={mapViewStyles.infoWindow}>
                  <p style={mapViewStyles.subtitle}>
                    {selectedLocation.address}
                  </p>
                </div>
              </InfoWindow>
            )}
          </Map> */}

          <MapWithUpdateableCenter
            initialCenter={center}
            locations={locations}
            onMarkerClick={handleMarkerClick}
            selectedLocation={selectedLocation}
            onInfoWindowClose={handleInfoWindowClose}
          />
        </APIProvider>
      </div>
    </div>
  );
};
export default MapView;
