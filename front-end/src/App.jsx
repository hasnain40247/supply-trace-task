import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Main from "./pages/MainPage/Main";
import CompanyListPage from "./pages/CompanyListPage/CompanyListPage";
import CompanyDetailsPage from "./pages/CompanyDetailsPage/CompanyDetailsPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

/**
 * App component
 *
 * This is the main component that sets up routing using react-router-dom.
 *
 * @returns {JSX.Element} The App component
 */
const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/company-list" element={<CompanyListPage />} />
          <Route path="/details/:company_id" element={<CompanyDetailsPage />} />
          <Route path="/" element={<Main />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
