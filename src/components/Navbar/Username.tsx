import React, { useContext } from "react"
import { UserContext } from "./userContext"
export interface UsernameProps {}

const Username: React.SFC<UsernameProps> = () => {
  const { username } = useContext(UserContext)
  return (
    <span
      style={{
        backgroundColor: "white",
        backgroundImage: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
        backgroundSize: "100%",
        backgroundRepeat: "repeat",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {username || "Usuario"}
    </span>
  )
}

export default Username
