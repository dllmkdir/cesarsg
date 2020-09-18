import React, { useState, useEffect, useContext, useRef } from "react"
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"
import { animated, useSpring } from "react-spring"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { StageContext } from "../Stages/context"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
export interface ArrowDownProps {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    cursor: "pointer",

    background: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
    borderRadius: 50,
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
  },
  icon: {
    width: 50,
    height: 50,
    color: "white",
    [theme.breakpoints.down("xs")]: {
      width: 35,
      height: 35,
    },
  },
}))
const ArrowDown: React.SFC<ArrowDownProps> = () => {
  //check media query with hook
  const theme = useTheme()
  const isXS = useMediaQuery(theme.breakpoints.down("xs"))
  //create a ref to prevent init use effect
  const initRef = useRef(false)
  const { stage } = useContext(StageContext)
  const [hovered, setHovered] = useState(false)
  const [divProps, setDivProps] = useSpring(() => ({
    padding: 15,
  }))
  // Hover Logic
  const toggleHover = () => setHovered(h => !h)
  useEffect(() => {
    if (isXS) return
    if (hovered) {
      setDivProps({ padding: 20 })
    } else {
      setDivProps({ padding: 15 })
    }
  }, [hovered])
  // Scroll Logic
  useEffect(() => {
    if (stage === 1) {
      //be carful with big buttons for mobile devices
      setDivProps({ padding: 15 })
    } else {
      setDivProps({ padding: 0 })
    }
  }, [stage])
  useEffect(() => {}, [isXS])
  const handleClick = () => {
    setDivProps({ padding: 0 })
    window.scrollTo({
      top: window.scrollY + window.innerHeight * 0.9,
      left: 0,
      behavior: "smooth",
    })
  }
  const classes = useStyles()
  return (
    <animated.div
      className={classes.root}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      onClick={handleClick}
      style={divProps}
    >
      <ArrowDownwardIcon className={classes.icon} />
    </animated.div>
  )
}

export default ArrowDown
