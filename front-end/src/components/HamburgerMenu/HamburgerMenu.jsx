import { NavLink } from "react-router-dom";
import hamburgerMenuStyles from "./HamburgerMenuStyles";
import { IoClose } from "react-icons/io5";
import NavItems from "../NavItems/NavItems";

/**
 * HamburgerMenu component
 *
 * This component renders a responsive navigation menu for mobile views.
 * It includes a logo, a close button, and navigation items.
 *
 * @param {Object} props - The component props
 * @param {function} props.handleHamburger - Function to handle the closing of the hamburger menu
 * @returns {JSX.Element} The HamburgerMenu component
 */
const HamburgerMenu = ({ handleHamburger }) => {
  return (
    <div style={hamburgerMenuStyles.navbarResponsive}>
      <div style={hamburgerMenuStyles.hamburgerContainer}>
        <NavLink to={"/"}>
          <img
            height="80px"
            width="80px"
            src={require("../../assets/logo.png")}
          />
        </NavLink>
        <IoClose
          className="hamburger"
          style={hamburgerMenuStyles.close}
          onClick={handleHamburger}
        />
      </div>
      <NavItems className={"navItemsResponsive"} />
    </div>
  );
};


export default HamburgerMenu