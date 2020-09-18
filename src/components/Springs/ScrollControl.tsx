import { Grid, makeStyles, Theme } from "@material-ui/core"
import React from "react"
import ScrollButton from "./ScrollButton"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
export interface ScrollControlProps {}
const useStyles = makeStyles(() => ({
  root: {
    position: "fixed",
    bottom: 0,
    right: 12,
    maxWidth: "150px",
  },
  item: {
    padding: 18,
  },
  icon: {
    color: "white",
  },
}))

//control scrolling buttons
const ScrollControl: React.SFC<ScrollControlProps> = () => {
  const classes = useStyles()
  const moveDown = () => {
    const SceneHeight = window.innerHeight * 0.9
    const windowResidue = window.scrollY % SceneHeight
    let offset = 0
    if (windowResidue >= SceneHeight / 2) {
      offset = Math.abs(windowResidue - SceneHeight)
    } else {
      offset = windowResidue
    }
    console.log(offset)
    window.scrollTo({
      top: window.scrollY + SceneHeight - offset,
      left: 0,
      behavior: "smooth",
    })
  }
  const moveUp = () => {
    const SceneHeight = window.innerHeight * 0.9
    //offset complement
    let offset =
      window.innerHeight * 0.9 - (window.scrollY % (window.innerHeight * 0.9))
    if (offset > SceneHeight / 2) {
      offset = Math.abs(offset - SceneHeight)
      console.log("offf")
    } else {
      console.log("wow")
    }
    console.log(offset)
    window.scrollTo({
      top: window.scrollY - window.innerHeight * 0.9 + offset,
      left: 0,
      behavior: "smooth",
    })
  }
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={6} className={classes.item}>
        <ScrollButton
          type="down"
          background="linear-gradient(135deg, #f6d365 0%, #fda085 100%)"
          onClick={moveDown}
        >
          <ExpandMoreIcon className={classes.icon} />
        </ScrollButton>
      </Grid>
      <Grid item xs={6} className={classes.item}>
        <ScrollButton
          type="up"
          background="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
          onClick={moveUp}
        >
          <ExpandLessIcon className={classes.icon} />
        </ScrollButton>
      </Grid>
    </Grid>
  )
}

export default ScrollControl
