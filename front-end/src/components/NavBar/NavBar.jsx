import { NavLink } from "react-router-dom";
import navBarStyles from "./NavBarStyles";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import NavItems from "../NavItems/NavItems";
import { IoClose } from "react-icons/io5";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
/**
 * NavBar component
 *
 * This component renders a navigation bar with a logo, hidden hamburger menu icon,
 *  and navigation items. It includes functionality to toggle within the hamburger
 * icon for a responsive hamburger menu for mobile views.
 *
 * @returns {JSX.Element} The NavBar component
 */
const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const handleHamburger = () => {
    setMenu(!menu);
  };
  return (
    <div style={navBarStyles.navbar} className="navbar">
      <NavLink to={"/"}>
        <img
          height="80px"
          width="80px"
          src={require("../../assets/logo.png")}
        />
      </NavLink>
      <GiHamburgerMenu
        className="hamburger"
        style={navBarStyles.hamburger}
        onClick={handleHamburger}
      />
      {menu && <HamburgerMenu handleHamburger={handleHamburger} />}
      <NavItems className={"navItems"} />
    </div>
  );
};

export default NavBar;
