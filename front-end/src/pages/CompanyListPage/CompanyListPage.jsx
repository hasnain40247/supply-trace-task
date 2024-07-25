import React, { useEffect, useState } from "react";
import axios from "axios";
import CompanyTable from "../../components/CompanyTable/CompanyTable";
import globalStyles from "../../styles/GloblStyles";
import companyListPageStyles from "./CompanyListPageStyles";


const CompanyListPage = () => {
  const [companies, setCompanies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
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
      <h1 style={{ ...globalStyles.title, ...companyListPageStyles.title }} className="warntitle">
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
