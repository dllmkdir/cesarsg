import React, { useContext } from "react"
import { Waypoint } from "react-waypoint"
import { StageContext } from "./context"
export interface StageDividerProps {
  stage: number
}

const StageDivider: React.SFC<StageDividerProps> = ({ stage }) => {
  const { dispatch } = useContext(StageContext)
  return <Waypoint onEnter={() => dispatch({ type: "set", stage })} />
}

export default StageDivider
