import { Fade } from "@material-ui/core"
import React, { useState } from "react"
import { Waypoint } from "react-waypoint"
export interface FadeWaypointProps {}

const FadeWaypoint: React.SFC<FadeWaypointProps> = ({ children }) => {
  const [show, setShow] = useState(false)
  return (
    <>
      {/* 
          // @ts-ignore */}
      <Fade in={show}>
        {/* 
          // @ts-ignore */}
        {children}
      </Fade>
      <Waypoint onEnter={() => setShow(true)} />
    </>
  )
}

export default FadeWaypoint
