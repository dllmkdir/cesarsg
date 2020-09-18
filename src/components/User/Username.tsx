import React, { useContext } from "react"
import Highlight from "../Highlight"
import { UserContext } from "./userContext"
export interface UsernameProps {}

const Username: React.SFC<UsernameProps> = () => {
  const { username } = useContext(UserContext)
  return <Highlight type="user">{username || "Usuario"}</Highlight>
}

export default Username
