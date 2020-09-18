import React, { useContext } from "react"
import StageDivider from "../Stages"
import { StageContext } from "../Stages/context"
import { useStyles } from "./styles"
interface SceneProps {
  position?: "center" | "right" | "left"
  wide: boolean
  background?: string
  stage: number
}
// Scenarios render
// set if we need widescreen,
//position refers to center, right or left
const Scene: React.FC<SceneProps> = ({
  children,
  position,
  wide,
  background,
  stage,
}) => {
  // @ts-ignore
  const classes = useStyles()
  const { stage: stageTemp } = useContext(StageContext)
  //get appropriate class
  const getClass = (): string => {
    let classMessage = ""
    if (position === "center") {
      classMessage += `${classes.centerBox} `
    } else if (position === "right") {
      classMessage += `${classes.rightBox} `
    } else if (position === "left") {
      classMessage += `${classes.leftBox} `
    }

    if (wide) {
      classMessage += `${classes.root} `
    } else {
      classMessage += `${classes.rootNarrow} `
    }
    return classMessage
  }

  return (
    //   background content
    <div
      style={{
        background,
      }}
    >
      {/* Max Width Div */}
      <div
        style={{
          maxWidth: 1400,
          display: "block",
          margin: "0 auto",
        }}
      >
        {/* Centered content div */}
        <div className={getClass()}>
          {children}
          {/* <p style={{ color: "red" }}>{stageTemp}</p> */}
          <StageDivider stage={stage} />
        </div>
      </div>
    </div>
  )
}

export default Scene
