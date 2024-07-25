import { NavLink } from "react-router-dom";
import navItemsStyles from "./NavItemsStyles";

const NavItems = ({ className }) => {
  return (
    <div
      style={navItemsStyles.navItems}
      className={className}
    >
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
