import { useEffect, useState } from "react";
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
        <APIProvider apiKey={process.env.REACT_APP_MAP_API_KEY}>
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
