import React from "react"
import { useStyles } from "./styles"
export interface PopBlockProps {
  bg: string
}

const PopBlock: React.SFC<PopBlockProps> = ({ bg, children }) => {
  // @ts-ignore
  const classes = useStyles()
  return (
    <div className={classes.block} style={{ background: bg }}>
      {children}
    </div>
  )
}

export default PopBlock
