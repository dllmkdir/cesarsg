import { CircularProgress } from "@material-ui/core"
import React from "react"
import { lazy, LazyBoundary } from "react-imported-component"
import { ParallaxProvider } from "react-scroll-parallax"
import { UserProvider } from "../components/User/userContext"
import { StageProvider } from "../components/Stages/context"
import { isIE } from "react-device-detect"
import "../../static/styles/global.css"
const IndexComponent = lazy(() => import("../components/Index"))

const IndexWrapper: React.FC = () => {
  if (isIE) {
    return <Unsupported />
  }
  return (
    <LazyBoundary fallback={<Fallback />}>
      <StageProvider>
        <ParallaxProvider>
          <UserProvider>
            <IndexComponent />
          </UserProvider>
        </ParallaxProvider>
      </StageProvider>
    </LazyBoundary>
  )
}
//pure css loader fallback
const Fallback = () => (
  <div
    style={{
      width: "100%",
      height: "calc(100vh -  20px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
)
//Unsupported devices component
const Unsupported = () => (
  <div className="slide-container center-container" id="pres1">
    <h1
      className="text-presentation"
      style={{
        textAlign: "center",
        width: "80%",
        margin: "0 auto",
        transform: "translate3d(2.383%,0px,0px)",
      }}
    >
      Lo siento amig@, dispositivo sin soporte por el momento:(
      <div className="social-table">
        <a href="https://www.facebook.com/profile.php?id=100023781759905">
          <img src="/fb.png" alt={""} />
        </a>
        <a href="https://www.instagram.com/cesarsalazarg">
          <img src="/ig.png" alt={""} />
        </a>
        <a href="https://soundcloud.com/cesar-salazar-570942046">
          <img src="/sc.png" alt={""} />
        </a>
      </div>
    </h1>
  </div>
)
export default IndexWrapper
