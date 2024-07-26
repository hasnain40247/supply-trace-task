import { Link } from "react-router-dom";
import companyTableStyles from "./CompanyTableStyles";
import globalStyles from "../../styles/GloblStyles";
/**
 * CompanyTable component
 *
 * This component renders a table consisting of the name of the company and their main locations.
 *
 * @param {Object} props - The component props
 * @param {string} props.search - The current search query
 * @param {function} props.handleSearch - Function to handle search input changes
 * @param {Array} props.filteredCompanies - List of companies filtered based on the search query
 * @returns {JSX.Element} The CompanyTable component
 */
const CompanyTable = ({ search, handleSearch, filteredCompanies }) => {
  return (
    <div style={companyTableStyles.companytableouter} className="companytableouter">
      <input
        style={companyTableStyles.custinput}
        type="text"
        placeholder="Search companies by name"
        value={search}
        onChange={handleSearch}
        className="custinput"
      />
      <div style={globalStyles.stickyrecord} className="stickyrecord">
        <p>Company Name</p>
        <p>Company Address</p>
      </div>
      <div style={globalStyles.companytable} className="companytable">
        {filteredCompanies.map((company) => (
          <Link
            to={`/details/${company.company_id}`}
            style={globalStyles.invisibleLink}
          >
            <div
              key={company.company_id}
              style={globalStyles.companyrecord}
              className="companyrecord"
            >
              <p style={{textAlign:"left"}}>{company.name}</p>
              <p style={{textAlign:"right"}}>{company.address}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CompanyTable;
