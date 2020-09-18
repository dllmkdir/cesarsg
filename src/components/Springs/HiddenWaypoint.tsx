import { Grow } from "@material-ui/core"
import React, { useState } from "react"
import { Waypoint } from "react-waypoint"
export interface HiddenWaypointProps {}

const HiddenWaypoint: React.SFC<HiddenWaypointProps> = ({ children }) => {
  const [show, setShow] = useState(false)
  return (
    <>
      {/* 
          // @ts-ignore */}
      <Grow in={show}>
        {/* 
          // @ts-ignore */}
        {children}
      </Grow>
      <Waypoint onEnter={() => setShow(true)} />
    </>
  )
}

export default HiddenWaypoint
