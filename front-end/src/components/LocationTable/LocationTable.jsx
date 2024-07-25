import globalStyles from "../../styles/GloblStyles";
import locationTableStyles from "./LocationTableStyles";

const LocationTable = ({ locations, handleLocationHover }) => {
  return (
    <div style={locationTableStyles.companytableouter} className="conpanytableouter">
      <div
        style={{
          ...globalStyles.stickyrecord,
          ...locationTableStyles.stickyrecord,
        }}
         className="stickyrecord"
      >
        <p>Company Address</p>
      </div>
      <div style={globalStyles.companytable}>
        {locations.map((location) => (
          <div
            key={location.location_id}
            style={globalStyles.companyrecord}
            className="companyrecord"
            onMouseEnter={() => handleLocationHover(location)}
          >
            <p>{location.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationTable;
