import React from "react"
import { useStyles } from "./styles"
interface SceneProps {
  position?: "center" | "right" | "left"
  wide: boolean
  background?: string
}
// Scenarios render
// set if we need widescreen,
//position refers to center, right or left
const Scene: React.FC<SceneProps> = ({
  children,
  position,
  wide,
  background,
}) => {
  // @ts-ignore
  const classes = useStyles()
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
    <div className={getClass()} style={{ backgroundImage: background }}>
      {children}
    </div>
  )
}

export default Scene
