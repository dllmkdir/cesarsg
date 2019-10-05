import React, { useContext } from "react"
import Layout from "../components/Layout"
import Scene from '../components/Scene/index'
import { UserProvider, UserContext } from '../components/Navbar/userContext'
import { SceneProvider } from '../components/Scene/SceneContext'
// Index for cesarsg.com SPA
const Index: React.FC = () => {
  const { username } = useContext(UserContext)
  return (
    <Layout>
      <Scene wide={true} position={"center"}>
        <h1>Incredible! {username}</h1>
      </Scene>
    </Layout>
  )
}

const IndexWrapper: React.FC = () => {
  return (
    <SceneProvider>
      <UserProvider>
        <Index />
      </UserProvider>
    </SceneProvider>
  )
}

export default IndexWrapper
