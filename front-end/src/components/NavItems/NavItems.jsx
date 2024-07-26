import { NavLink } from "react-router-dom";
import navItemsStyles from "./NavItemsStyles";
/**
 * NavItems component
 *
 * This component renders navigation links for the company list and company details.
 * It applies styles and class names to indicate active and inactive states.
 * Moreover, the details page asks to choose a companyID if not chosen.
 *
 * @param {Object} props - The component props
 * @param {string} props.className - Additional class name for styling the container
 * @returns {JSX.Element} The NavItems component
 */
const NavItems = ({ className }) => {
  return (
    <div style={navItemsStyles.navItems} className={className}>
      <NavLink
        to={"/company-list"}
        style={navItemsStyles.navlink}
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        {" "}
        <h3>Company List</h3>
      </NavLink>
      <NavLink
        to={"/details/e"}
        style={navItemsStyles.navlink}
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        {" "}
        <h3>Company Details</h3>
      </NavLink>
    </div>
  );
};

export default NavItems;
