import { makeStyles, Theme } from "@material-ui/core/styles"
export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    minHeight: "90.5vh",
    marginLeft: "3em",
    marginRight: "3em",
    fontFamily: "Open sans Semibold",
    fontSize: "1.5rem",
    color: "white",
    letterSpacing: "1px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1rem",
      marginLeft: "1.5em",
      marginRight: "1.5em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
      marginLeft: 16,
      marginRight: 16,
    },
  },
  rootNarrow: {
    display: "flex",
    alignItems: "center",
    minHeight: "30vh",
    marginLeft: "3em",
    marginRight: "3em",
    fontFamily: "Open sans Semibold",
    fontSize: "1.5rem",
    color: "white",
    letterSpacing: "1px",
  },
  centerBox: {
    justifyContent: "center",
  },
  leftBox: {
    textAlign: "left",
  },
  rightBox: {
    textAlign: "right",
  },
}))
