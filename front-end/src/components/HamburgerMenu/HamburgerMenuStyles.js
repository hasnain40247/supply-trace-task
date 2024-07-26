// Define a set of styles specific to the HamburgerMenu component


const hamburgerMenuStyles = {

  navbarResponsive: {
    boxSizing: "border-box",
    position: "absolute",
    paddingTop:"7rem",
    left: "0px",
    zIndex: "2",
    width: "100%",
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#BEC6A0",
    boxShadow: "1px 1px 10px 1px #BEC6A0",

  },
  hamburgerContainer:{
    display: "flex",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
  }
,
  hamburger: {
    color: "#BEC6A0",
    display: "none",
    fontSize: "2rem",
  },

  close: {
    color: "#fef3e2",
    fontSize: "2rem",
  },

};
export default hamburgerMenuStyles;
