//highlight text depending on the information
import React from "react"
export interface HighlightProps {
  type: HighlightType
}
type HighlightType = "user" | "place" | "text"

const Highlight: React.FC<HighlightProps> = ({ type, children }) => {
  //calculate color with the type prop
  const calculateColor = (typeTemp: HighlightType): string => {
    switch (typeTemp) {
      case "user":
        return "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)"

      case "place":
        return "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
      case "text":
        return "linear-gradient(135deg, #f6d365 0%, #fda085 100%)"
    }
  }
  return (
    <span
      style={{
        backgroundColor: "white",
        backgroundImage: calculateColor(type),
        backgroundSize: "100%",
        backgroundRepeat: "repeat",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {children}
    </span>
  )
}

export default Highlight
