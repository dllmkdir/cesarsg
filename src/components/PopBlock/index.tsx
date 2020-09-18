import { Grow } from "@material-ui/core"
import React, { useState } from "react"
import { Waypoint } from "react-waypoint"
import HiddenWaypoint from "../Springs/HiddenWaypoint"
import { useStyles } from "./styles"
export interface PopBlockProps {
  bg: string
}

const PopBlock: React.SFC<PopBlockProps> = ({ bg, children }) => {
  const classes = useStyles()
  return (
    <>
      <HiddenWaypoint>
        <div className={classes.block} style={{ background: bg }}>
          {children}
        </div>
      </HiddenWaypoint>
    </>
  )
}

export default PopBlock
