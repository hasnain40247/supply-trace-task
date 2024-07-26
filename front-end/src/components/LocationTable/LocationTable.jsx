import globalStyles from "../../styles/GloblStyles";
import locationTableStyles from "./LocationTableStyles";

/**
 * LocationTable component
 *
 * This component renders a table of locations with an address.
 * It displays the address of each location and triggers a function to update the map
 * when a location is hovered over.
 *
 * @param {Object} props - The component props
 * @param {Array} props.locations - List of location objects to be displayed
 * @param {function} props.handleLocationHover - Function to handle the hover event on a location
 * @returns {JSX.Element} The LocationTable component
 */

const LocationTable = ({ locations, handleLocationHover }) => {
  return (
    <div
      style={locationTableStyles.companytableouter}
      className="conpanytableouter"
    >
      <div
        style={{
          ...globalStyles.stickyrecord,
          ...locationTableStyles.stickyrecord,
        }}
        className="locationstickyrecord"
      >
        <p>Company Name</p>
        <p>Company Address</p>
        <p>Latitude</p>

        <p>Longitude</p>
      </div>
      <div style={globalStyles.companytable}>
        {locations.map((location) => (
          <div
            key={location.location_id}
            style={globalStyles.companyrecord}
            className="locationrecord"
            onMouseEnter={() => handleLocationHover(location)}
          >
            <p>{location.name}</p>
            <p>{location.address}</p>
            <p>{location.latitude}</p>
            <p>{location.longitude}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationTable;
