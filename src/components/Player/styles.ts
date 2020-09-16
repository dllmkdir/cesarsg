import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    width: "200px",
    padding: "10px",
  },
  iconBox: {
    flex: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 10px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  icon: {
    color: "white !important",
  },
  sliderBox: {
    flex: "80%",
  },
  slider: {
    color: "white !important",
  },
}))

function arrowGenerator(color: string) {
  return {
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: "-0.95em",
      width: "2em",
      height: "1em",
      "&::before": {
        borderWidth: "0 1em 1em 1em",
        borderColor: `transparent transparent ${color} transparent`,
      },
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: "-0.95em",
      width: "2em",
      height: "1em",
      "&::before": {
        borderWidth: "1em 1em 0 1em",
        borderColor: `${color} transparent transparent transparent`,
      },
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: "-0.95em",
      height: "2em",
      width: "1em",
      "&::before": {
        borderWidth: "1em 1em 1em 0",
        borderColor: `transparent ${color} transparent transparent`,
      },
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: "-0.95em",
      height: "2em",
      width: "1em",
      "&::before": {
        borderWidth: "1em 0 1em 1em",
        borderColor: `transparent transparent transparent ${color}`,
      },
    },
  }
}

export const useStylesArrow = makeStyles((theme: Theme) =>
  createStyles({
    tooltip: {
      position: "relative",
    },
    arrow: {
      position: "absolute",
      fontSize: 6,
      "&::before": {
        content: '""',
        margin: "auto",
        display: "block",
        width: 0,
        height: 0,
        borderStyle: "solid",
      },
    },
    popper: arrowGenerator(theme.palette.grey[700]),
  })
)
