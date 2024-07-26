import { useEffect, useState } from "react";
import visualizationStyles from "./VisualizationStyles";
import globalStyles from "../../styles/GloblStyles";
import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";

/**
 * Visualization component
 *
 * This component renders vizualizations for location distance and distribution by state.
 *
 * @param {Object} distanceChartData - Object of the data to be shown for distance plot.
 * @param {Object} distributionChartData - Object of the data to be shown for location distribution plot.
 * @param {Object} distanceChartOptions - Object of the customization of the distance plots
 * @param {Object} distributionChartOptions - Object of the customization of the distribution plots.
 * @returns {JSX.Element} The Visualizationcomponent
 */
const Visualization = ({
  distributionChartOptions,
  distributionChartData,
  distanceChartOptions,
  distanceChartData,
}) => {
  return (
    <div style={visualizationStyles.mainContainer} className="viscontainer">
      <h1
        style={{ ...globalStyles.title, ...visualizationStyles.title }}
        className="warntitle"
      >
        Location Visualziation
      </h1>

      <div
        style={visualizationStyles.distanceContainer}
        className="distanceContainer"
      >
        <Bar data={distanceChartData} options={distanceChartOptions} />
      </div>
      <div
        style={visualizationStyles.distanceContainer}
        className="distanceContainer"
      >
        <Bar data={distributionChartData} options={distributionChartOptions} />
      </div>
      <div
        style={{
          ...visualizationStyles.distanceContainer,
          ...visualizationStyles.distPieContainer,
        }}
        className="pieContainer"
      >
        <Pie data={distributionChartData} options={distributionChartOptions} />
      </div>
    </div>
  );
};

export default Visualization;
