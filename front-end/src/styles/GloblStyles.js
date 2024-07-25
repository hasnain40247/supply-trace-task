const globalStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100vh",
    margin: 0,
    boxSizing: "border-box",
    textAlign: "center",
  },
  invisibleLink: {
    textDecoration: "none",
  },
  title: {
    color: "#708871",
    fontSize: "8rem",
    fontWeight: "800",
    margin: "0px",
  },
  subtitle: {
    fontSize: "1rem",
    color: "#606676",
    fontWeight: "400",
    fontStyle: "italic",
    margin: "0px",
  },
  companytable: {
    display: "flex",
    overflowY: "auto",
    flexDirection: "column",
    borderRadius: "0px 0px 20px 20px",
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
    color: "#606676",
    fontStyle:"bold",
    fontWeight: "900",
  },
};

export default globalStyles;
