import {useState } from "react";
import mapViewStyles from "./MapViewStyles";
import {
  APIProvider,
} from "@vis.gl/react-google-maps";
import MapWithUpdateableCenter from "./MapWithUpdatableCenter";
/**
 * MapView component
 *
 * This component renders a map view with markers for all possible company locations.
 * It allows users to click on markers to view information about a location in an info window.
 * Additionally, this map updates based on hovers on the company locations.
 *
 * @param {Object} props - The component props
 * @param {Array} props.locations - List of location objects to be displayed as markers on the map
 * @param {Object} props.center - The initial center position of the map
 * @returns {JSX.Element} The MapView component
 */
const MapView = ({ locations, center }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  /**
   * handleMarkerClick function
   *
   * This function handles the information inside the marker's infowindow.
   *
   * @param {Object} loc The location - latitude and longitude of the selected location.
   */
  const handleMarkerClick = (loc) => {
    setSelectedLocation(loc);
  };

  /**
   * handleInfoWindowClose function
   *
   * This function is used to close the infowindow - it does not automatically close and will linger.
   */
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
