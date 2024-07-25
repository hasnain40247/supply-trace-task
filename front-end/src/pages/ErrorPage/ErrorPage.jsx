import React from "react";
import globalStyles from "../../styles/GloblStyles";
const ErrorPage = () => {
  return (
    <div style={globalStyles.container} className="container">
      <h1 style={globalStyles.title} className="title">Oops!</h1>
      <p style={globalStyles.subtitle} className="subtitle">You Seem To Be Lost.</p>
    </div>
  );
};

export default ErrorPage;
