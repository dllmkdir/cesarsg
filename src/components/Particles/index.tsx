import React, { useState, useEffect, memo } from "react"
import Particles from "react-particles-js"
//particle wrapper and memo interfaces
interface ParticleProps {
  size: number
  lineOpacity: number
  mobileStars?: number
  desktopStars?: number
}
interface ParticleMemoProps {
  size: number
  lineOpacity: number
  particleNum: number
}
// Render Particles Wrapper
const ParticlesWrapper: React.FC<ParticleProps> = ({
  size,
  lineOpacity,
  mobileStars,
  desktopStars,
}) => {
  const [particleNum, setParticleNum] = useState<number | null>(null)
  const [render, setRender] = useState<boolean>(false)
  useEffect(() => {
    if (particleNum) {
      console.log(particleNum)
      console.log(window.innerWidth)
      setRender(true) //Set render to true when particle number has been decided
    }
  }, [particleNum])

  useEffect(() => {
    //Measure total width to calculate total particles
    if (window.innerWidth <= 600) {
      if (mobileStars) {
        setParticleNum(mobileStars)
      } else {
        setParticleNum(48)
      }
    } else {
      //set default stars or custom dekstop stars
      if (desktopStars) {
        setParticleNum(desktopStars)
      } else {
        setParticleNum(100)
      }
    }
  }, [])
  if (!render) {
    return <React.Fragment />
  }
  return (
    <ParticleMemo
      particleNum={particleNum}
      size={size}
      lineOpacity={lineOpacity}
    />
  )
}
//create special memo just to avoid rerendering
//prevent re rendering using memo
const ParticleMemo: React.FC<ParticleMemoProps> = memo(function ParticleMemo({
  size,
  lineOpacity,
  particleNum,
}) {
  return (
    // @ts-ignore
    <Particles
      params={{
        particles: {
          number: {
            value: particleNum,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: true,
            opacity: lineOpacity,
          },
          move: {
            direction: "right",
            speed: 0.12,
          },
          size: {
            value: size,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1.5,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
      style={{
        width: "100%",
        heigth: "100%",
        position: "fixed",
        zIndex: -7,
        top: 0,
        left: 0,
      }}
      // @ts-ignore
      onScroll={(e: React.MouseEvent<HTMLCanvasElement>) => {
        e.preventDefault()
      }}
    />
  )
})

export default ParticlesWrapper
