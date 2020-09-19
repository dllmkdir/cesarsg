import { Grow } from "@material-ui/core"
import { CSSProperties } from "@material-ui/styles"
import React, { useState } from "react"
import { Waypoint } from "react-waypoint"
import HiddenWaypoint from "../Springs/HiddenWaypoint"
import { useStyles } from "./styles"
export interface PopBlockProps {
  bg: string
  style?: CSSProperties
}

const PopBlock: React.SFC<PopBlockProps> = ({ bg, children, style }) => {
  const classes = useStyles()
  return (
    <>
      <HiddenWaypoint>
        <div className={classes.block} style={{ background: bg, ...style }}>
          {children}
        </div>
      </HiddenWaypoint>
    </>
  )
}

export default PopBlock
