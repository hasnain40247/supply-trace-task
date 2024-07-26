import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaLocationPin } from "react-icons/fa6";
import MapView from "../../components/MapView/MapView";
import LocationTable from "../../components/LocationTable/LocationTable";
import BackNavigation from "../../components/BackNavigation/BackNavigation";
import globalStyles from "../../styles/GloblStyles";
import companyDetailsPageStyles from "./CompanyDetailsPageStyles";
/**
 * CompanyDetailsPage component
 *
 * This component renders the details of a company, including its locations and a map view.
 * It fetches the company details and locations from an API and handles hover events to update the map center.
 *
 * @returns {JSX.Element} The CompanyDetailsPage component
 */
const CompanyDetailsPage = () => {
  const { company_id } = useParams();
  const [company, setCompany] = useState({});
  const [locations, setLocations] = useState([]);

  const [center, setCenter] = useState(null);

  useEffect(() => {
    /**
     * fetchCompanyDetails function
     *
     * This function fetches both the companies and locations by company_id from
     * the flask server that is set up. Additionally, it also sets the center state
     * for initial camera zoom.
     *
     */
    const fetchCompanyDetails = async () => {
      try {
        const companyResponse = await axios.get(`/api/companies/${company_id}`);
        const locationsResponse = await axios.get(
          `/api/companies/${company_id}/locations`
        );
        setCompany(companyResponse.data[0]);
        setCenter({
          lat: companyResponse.data[0].latitude,
          lng: companyResponse.data[0].longitude,
        });
        setLocations(locationsResponse.data);
      } catch (error) {
        console.error("Error fetching company details", error);
      }
    };

    fetchCompanyDetails();
  }, [company_id]);

  /**
   * handleLocationHover function
   *
   * This function sets the center state which essentially is responsible for
   * updating the map's camera pans.
   *
   * @param {Object} location The location object to set centered coordinates.
   */
  const handleLocationHover = (location) => {
    setCenter({ lat: location.latitude, lng: location.longitude });
  };
  if (company_id === "e") {
    return (
      <div
        style={{
          ...globalStyles.container,
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <BackNavigation />
        <p style={globalStyles.subtitle}>
          Select A Company To View Its Details.
        </p>
      </div>
    );
  }
  return (
    <div
      style={companyDetailsPageStyles.container}
      className="companyDetailContainer"
    >
      <BackNavigation sm />
      <div
        style={companyDetailsPageStyles.innerContainer}
        className="innerContainer"
      >
        <div
          style={companyDetailsPageStyles.detailscontainer}
          className="detailsContainer"
        >
          {company && (
            <>
              <h1 style={companyDetailsPageStyles.title}>{company.name}</h1>

              <p
                style={{
                  ...globalStyles.subtitle,
                  ...companyDetailsPageStyles.subtitle,
                }}
                onMouseEnter={() => handleLocationHover(company)}
              >
                <FaLocationPin style={{ marginRight: "4px" }} />
                {company.address}
              </p>
            </>
          )}

          <h1 style={companyDetailsPageStyles.title2}>All locations</h1>
          <p
            style={{
              ...globalStyles.subtitle,
              ...companyDetailsPageStyles.subtitle,
            }}
          >
            Hover To View Marker On Map
          </p>
          <LocationTable
            locations={locations}
            handleLocationHover={handleLocationHover}
          />
        </div>

        <MapView locations={locations} center={center} />
      </div>
    </div>
  );
};

export default CompanyDetailsPage;
