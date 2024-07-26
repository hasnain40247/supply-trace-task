import { useEffect, useState } from "react";
import visualizationStyles from "./VisualizationStyles";
import globalStyles from "../../styles/GloblStyles";
import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
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

      <div style={visualizationStyles.distanceContainer} className="distanceContainer">
        <Bar data={distanceChartData} options={distanceChartOptions} />
      </div>
      <div style={visualizationStyles.distanceContainer} className="distanceContainer">
        <Bar data={distributionChartData} options={distributionChartOptions} />
      </div>
      <div
        style={{
          ...visualizationStyles.distanceContainer,
        ...visualizationStyles.distPieContainer
        }}
        className="pieContainer"
      >
        <Pie data={distributionChartData} options={distributionChartOptions} />
      </div>
    </div>
  );
};

export default Visualization;
