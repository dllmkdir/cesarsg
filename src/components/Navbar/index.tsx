import React, { useState, useContext } from "react"
import { useStyles } from "./styles"
import Player from "../Player/index"
import { UserContext } from "../User/userContext"
// @ts-ignore
import logo from "../../../static/web-grande-blanco.png"
// Navbar using Materila ui Components
const Navbar: React.FC = () => {
  const [username, setUsername] = useState<string>("")
  const { dispatch: userDispatch } = useContext(UserContext)
  // set username
  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.value.length >= 40) return
    userDispatch({ type: "set", username: e.target.value })
    setUsername(e.target.value)
  }

  // @ts-ignore
  const classes = useStyles()
  return (
    //   Classic Navbar
    <div className={classes.root}>
      {/* Main Logo */}

      <img src={logo} alt={"cesarsg.com logo"} className={classes.logo} />

      <div className={classes.subNav}>
        {/* 
                // @ts-ignore */}
        <input
          autoComplete="off"
          type="text"
          id="outlined-required"
          value={username}
          onChange={handleUsername}
          className={classes.input}
          placeholder={"Ingresa Tu Nombre"}
        />
        <Player />
      </div>
    </div>
  )
}

export default Navbar
