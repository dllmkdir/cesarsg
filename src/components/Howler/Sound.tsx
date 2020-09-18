import React, { memo, useContext, useEffect } from "react"
import { StageContext } from "../Stages/context"
import HowlerCustom from "./HowlerCustom"
//in this component we will render all the sounds from the site
//volume from sound player is required
export interface SoundProps {
  volume: number
  kickPlayRef?: boolean
}

const Sound: React.SFC<SoundProps> = memo(({ volume, kickPlayRef }) => {
  const { stage } = useContext(StageContext)
  return (
    <>
      <HowlerCustom
        kickPlay={kickPlayRef}
        path="/audio/space/Music/Space_Music_Loop_01.mp3"
        playing={stage === 1}
        volume={volume * 0.8}
        loop
      />
      <HowlerCustom
        kickPlay={kickPlayRef}
        path="/audio/space/ambience/Space_Ambience_1.mp3"
        playing={stage === 2}
        volume={volume * 0.6}
        loop
      />
      <HowlerCustom
        kickPlay={kickPlayRef}
        path="/audio/space/Music/Space_Music_Loop_02.mp3"
        playing={stage === 3}
        volume={volume * 0.6}
        loop
      />
      <HowlerCustom
        kickPlay={kickPlayRef}
        path="/audio/space/ambience/Space_Ambience_2.mp3"
        playing={stage === 4 || stage === 5 || stage === 6}
        loop
        volume={volume * 0.8}
      />
      <HowlerCustom
        kickPlay={kickPlayRef}
        path="/audio/space/ambience/Space_Ambience_3.mp3"
        playing={stage === 7}
        loop
        volume={volume * 0.8}
      />

      <HowlerCustom
        kickPlay={kickPlayRef}
        path="/audio/space/SFX/Space_SFX_Heartbeat_1.mp3"
        playing={stage === 8}
        volume={volume}
        loop
      />
      <HowlerCustom
        kickPlay={kickPlayRef}
        path="/audio/space/SFX/Space_SFX_Heartbeat_2.mp3"
        playing={stage === 9}
        volume={volume}
        loop
      />
      <HowlerCustom
        kickPlay={kickPlayRef}
        path="/audio/space/SFX/Space_SFX_Heartbeat_3.mp3"
        playing={stage === 10}
        volume={volume}
        loop
      />

      <HowlerCustom
        kickPlay={kickPlayRef}
        path="/audio/space/Music/Space_Music_Loop_03.mp3"
        playing={stage === 11 || stage === 12}
        volume={volume * 0.6}
        loop
      />
      <HowlerCustom
        kickPlay={kickPlayRef}
        path="/audio/space/Music/Space_Music_Loop_04.mp3"
        playing={stage > 12}
        volume={volume * 0.5}
        loop
      />

      <HowlerCustom
        kickPlay={kickPlayRef}
        path="/audio/space/SFX/Space_SFX_Hit_1.mp3"
        playing={stage === 11}
        volume={volume}
      />
      <HowlerCustom
        kickPlay={kickPlayRef}
        path="/audio/space/SFX/Space_SFX_Hum_1.mp3"
        playing={stage === 12}
        volume={volume}
      />
      <HowlerCustom
        kickPlay={kickPlayRef}
        path="/audio/space/SFX/Space_SFX_Gun_07_Samp.mp3"
        playing={stage === 13}
        volume={volume * 0.8}
      />
    </>
  )
})

export default Sound
