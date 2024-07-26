import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaLocationPin } from "react-icons/fa6";
import MapView from "../../components/MapView/MapView";
import LocationTable from "../../components/LocationTable/LocationTable";
import BackNavigation from "../../components/BackNavigation/BackNavigation";
import globalStyles from "../../styles/GloblStyles";
import companyDetailsPageStyles from "./CompanyDetailsPageStyles";
import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import Visualization from "../../components/Visualization/Visualization";
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
  const [distanceData, setDistanceData] = useState([]);
  const [locationDistribution, setLocationDistribution] = useState([]);

  const getRandomColor = () => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = 50 + Math.floor(Math.random() * 30); // Pastel colors typically have 50-80% saturation
    const lightness = 70 + Math.floor(Math.random() * 10); // Pastel colors typically have 70-80% lightness
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

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
        // Calculate distance data for visualization
        const distanceData = locationsResponse.data
          .filter(
            (location) =>
              companyResponse.data[0].latitude !== location.latitude ||
              companyResponse.data[0].longitude !== location.longitude
          )
          .map((location) => ({
            name: location.name,
            distance: calculateDistance(
              {
                lat: companyResponse.data[0].latitude,
                lng: companyResponse.data[0].longitude,
              },
              { lat: location.latitude, lng: location.longitude }
            ),
          }));
        setDistanceData(distanceData);
        // Calculate location distribution
        const states = locationsResponse.data.map((location) =>
          extractState(location.address)
        );
        const stateCounts = states.reduce((acc, state) => {
          acc[state] = (acc[state] || 0) + 1;
          return acc;
        }, {});
        const distributionData = Object.keys(stateCounts).map((state) => ({
          state,
          count: stateCounts[state],
        }));
        setLocationDistribution(distributionData);
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


  const calculateDistance = (loc1, loc2) => {
    const R = 3959; // Radius of the Earth in miles
    const dLat = (loc2.lat - loc1.lat) * (Math.PI / 180);
    const dLon = (loc2.lng - loc1.lng) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(loc1.lat * (Math.PI / 180)) *
        Math.cos(loc2.lat * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const extractState = (address) => {
    const match = address.match(/, ([A-Z]{2}) \d{5}/);
    return match ? match[1] : "Unknown";
  };

  // Distance chart data
  const distanceChartData = {
    labels: distanceData.map((data) => data.name),
    datasets: [
      {
        label: "Distance from Main Location (miles)",
        data: distanceData.map((data) => data.distance),
        backgroundColor: "#708871",
        borderWidth: 1,
      },
    ],
  };

  // Location distribution data
  const distributionChartData = {
    labels: locationDistribution.map((data) => data.state),
    datasets: [
      {
        label: "Number of Locations",
        data: locationDistribution.map((data) => data.count),
        backgroundColor: distanceData.map((data) => getRandomColor()),

        borderWidth: 1,
      },
    ],
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

  const distanceChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Distance from HQ",
      },
    },
  };

  const distributionChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Location Distribution",
      },
    },
  };


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
      <Visualization
        distanceChartData={distanceChartData}
        distributionChartData={distributionChartData}
        distanceChartOptions={distanceChartOptions}
        distributionChartOptions={distributionChartOptions}
      />
    </div>
  );
};

export default CompanyDetailsPage;
