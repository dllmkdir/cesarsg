import { makeStyles, Theme } from "@material-ui/core/styles"
export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "fixed" as "fixed",
    display: "flex",
    backgroundColor: "black",
    width: "100%",
    zIndex: 3,
    justifyContent: "space-between",
    border: "none",
  },
  subNav: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    height: "62px",
    padding: "0.1em",
  },
  input: {
    fontSize: "1rem",
    marginRight: "1.5rem",
    width: "160px",
    border: "none",
    borderBottom: "2px solid white",
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "Open Sans Semibold",
    "&:focus": {
      outline: "none",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}))
