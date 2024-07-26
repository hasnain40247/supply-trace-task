import { Link } from "react-router-dom";
import backNavigationStyles from "./BackNavigationStyles";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import globalStyles from "../../styles/GloblStyles";

/**
 * BackNavigation component
 *
 * This component renders a link that navigates back to the company list.
 * It uses styles from both global and component-specific stylesheets.
 *
 * @param {Object} props - The component props
 * @param {boolean} props.sm - A boolean that determines the font size of the subtitle
 * @returns {JSX.Element} The BackNavigation component
 */
const BackNavigation = ({ sm }) => {
  return (
    <Link to={`/company-list`} style={globalStyles.invisibleLink}>
      <p
        style={{
          ...globalStyles.subtitle,
          ...backNavigationStyles.subtitle,
          fontSize: sm ? "1.1rem" : "8rem",
        }}
        className="warntitle"
      >
        <IoArrowBackCircleSharp style={backNavigationStyles.icon} />
        Back To List{" "}
      </p>
    </Link>
  );
};
export default BackNavigation;
