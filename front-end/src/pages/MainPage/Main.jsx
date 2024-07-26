import React from "react";
import mainStyles from "./MainStyles";
import globalStyles from "../../styles/GloblStyles";
/**
 * Main component
 *
 * This component renders the introduction page.
 *
 * @returns {JSX.Element} The Main component
 */
const Main = () => {
  return (
    <div style={{ ...globalStyles.container, ...mainStyles.container }} className="container">
      <h1 style={globalStyles.title} className="title">Acompanion</h1>
      <p style={globalStyles.subtitle} className="subtitle">
        A dynamic and user-friendly platform designed to help users explore
        various companies, including their multiple locations. This application
        serves as a comprehensive directory for businesses, providing essential
        data to potential clients, partners, and job seekers.
      </p>
    </div>
  );
};

export default Main;
