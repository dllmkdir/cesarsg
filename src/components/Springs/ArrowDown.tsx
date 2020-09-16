import React from "react"
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded"
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"
export interface ArrowDownProps {}

const ArrowDown: React.SFC<ArrowDownProps> = () => {
  return (
    <ArrowDownwardIcon
      style={{
        color: "white",
        width: 50,
        height: 50,
        background: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
        borderRadius: 50,
        padding: "1rem",
      }}
    />
  )
}

export default ArrowDown
