import React, { useEffect, useState } from "react";
import axios from "axios";
import CompanyTable from "../../components/CompanyTable/CompanyTable";
import globalStyles from "../../styles/GloblStyles";
import companyListPageStyles from "./CompanyListPageStyles";
/**
 * CompanyListPage component
 *
 * This component renders a list of companies with a search input to filter the list.
 * It fetches the list of companies from an API and allows users to search for specific companies by name.
 *
 * @returns {JSX.Element} The CompanyListPage component
 */

const CompanyListPage = () => {
  const [companies, setCompanies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    /**
     * fetchCompanies function
     *
     * This function fetches the companies from the set up flask server.
     *
     */
    const fetchCompanies = async () => {
      try {
        const response = await axios.get("/api/companies");
        setCompanies(response.data);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    fetchCompanies();
  }, []);

  /**
   * handleLocationHover function
   *
   * This function sets the search as input's being typed for the filter function.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e TThe change event from the search input field.
   */
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div
      style={{ ...globalStyles.container, ...companyListPageStyles.container }}
      className="listcontainer"
    >
      <h1
        style={{ ...globalStyles.title, ...companyListPageStyles.title }}
        className="warntitle"
      >
        Company Directory
      </h1>
      <CompanyTable
        search={search}
        handleSearch={handleSearch}
        filteredCompanies={filteredCompanies}
      />
    </div>
  );
};

export default CompanyListPage;
