import { Link } from "react-router-dom";
import backNavigationStyles from "./BackNavigationStyles";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import globalStyles from "../../styles/GloblStyles";

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
