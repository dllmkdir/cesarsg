import React, {
  Component,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"
import { Grid, makeStyles, Theme } from "@material-ui/core"
import { animated, useSpring } from "react-spring"
import { StageContext } from "../Stages/context"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
const useStyles = makeStyles((theme: Theme) => ({
  button: {
    cursor: "pointer",

    background: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
    borderRadius: 50,
    padding: "0px !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 50,
    height: 50,
    color: "white",
  },
}))
export interface ScrollButtonProps {
  background: string
  type: "up" | "down"
  onClick: () => void
}

const ScrollButton: React.SFC<ScrollButtonProps> = ({
  background,
  onClick,
  type,
  children,
}) => {
  //check media query with hook
  const theme = useTheme()
  const isXS = useMediaQuery(theme.breakpoints.down("xs"))

  const { stage } = useContext(StageContext)
  const [hovered, setHovered] = useState(false)
  //prevent initial render with ref
  const initRef = useRef(false)
  //spring declaration
  const [divProps, setDivProps] = useSpring(() => ({
    height: 0,
    width: 0,
    opacity: 0,
  }))
  const [arrowProps, setArrowProps] = useSpring(() => ({
    opacity: 0,
    paddingTop: 5,
    paddingBottom: 1,
  }))
  // Hover Logic
  const toggleHover = () => setHovered(h => !h)
  useEffect(() => {
    if (isXS) return
    if (hovered) {
      if (type === "up") {
        setDivProps({ opacity: 0.98 })
        setArrowProps({ paddingBottom: 10 })
      } else {
        setDivProps({ opacity: 0.98 })
        setArrowProps({ paddingTop: 15 })
      }
    } else {
      setDivProps({ opacity: 0.85 })
      setArrowProps({ paddingTop: 5, paddingBottom: 1 })
    }
  }, [hovered])
  // Scroll Logic
  useEffect(() => {
    //prevent initial render
    if (initRef.current) {
      if (stage !== 1) {
        setDivProps({ height: 50, width: 50 })
        setArrowProps({ opacity: 1 })
      } else {
        setDivProps({ height: 0, width: 0 })
        setArrowProps({ opacity: 0 })
      }
    } else {
      initRef.current = true
    }
  }, [stage])
  //handle click for scrol buttons
  const handleClick = () => {
    // if (type === "up") {
    //   setArrowProps({ paddingBottom: 15 })
    // } else {
    //   setArrowProps({ paddingTop: 20 })
    // }
    onClick()
  }
  const classes = useStyles()
  return (
    <animated.div
      className={classes.button}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      style={{ ...divProps, background }}
      onClick={handleClick}
    >
      <animated.div style={arrowProps}>{children}</animated.div>
    </animated.div>
  )
}

export default ScrollButton
