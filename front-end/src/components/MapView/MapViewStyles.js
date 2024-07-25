const mapViewStyles = {
  invisibleLink: {
    textDecoration: "none",
  },
  horizontalRule: {
    border: "2px black",

    height: 5,
  },
  detailscontainer: {
    marginRight: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "start",
    height: "80%",
  },
  mapcontainer: {
    width: "100%",
    height: "100%",
    position: "relative",
    borderRadius: "20px",
    overflow: "hidden",
  },
  parentStyles: {
    borderRadius: "200px",
    flex: 2,
    height: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  infoWindow: { padding: "8px", maxWidth: "2000px" },

  title: {
    color: "#708871",
    textAlign: "left",
    fontSize: "2rem",
    fontWeight: "800",
    margin: "0px",
  },
  title2: {
    color: "#606676",
    fontSize: "1.4rem",
    fontWeight: "800",
    margin: "0px",
  },
  subtitle: {
    fontSize: "1rem",
    color: "#606676",
    fontWeight: "400",
    fontStyle: "italic",
    margin: "0px",
    marginBottom: "15px",
  },
  container: {
    display: "flex",
    padding: "6rem",
    paddingTop: "8rem",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100vh",
    margin: 0,
    boxSizing: "border-box",
    textAlign: "center",
  },
  images: {
    height: "70%",
    width: "30%",
    borderRadius: "20px",
    boxShadow: "1px 1px 10px 1px grey",
  },

  companytable: {
    display: "flex",
    overflowY: "auto",
    flexDirection: "column",
    borderRadius: "0px 0px 20px 20px",
  },
  companytableouter: {
    display: "flex",
    flex: 1,
    width: "100%",
    height: "75%",
    justifyContent: "start",
    flexDirection: "column",
    borderRadius: "20px 20px 0px 0px",
  },
  companyrecord: {
    display: "flex",
    borderTop: "1px solid #BEC6A0",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "20px",
    alignItems: "center",
    backgroundColor: "#F7F9F2",
    color: "#606676",
    fontWeight: "500",
  },
  stickyrecord: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "20px",
    alignItems: "center",
    backgroundColor: "#BEC6A0",
    borderRadius: "20px 20px 0px 0px",

    color: "#606676",
    fontStyle: "bold",
    fontWeight: "900",
  },
};

export default mapViewStyles;
