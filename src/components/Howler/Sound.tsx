import React, { useContext, useEffect } from "react"
import { StageContext } from "../Stages/context"
import HowlerCustom from "./HowlerCustom"
//in this component we will render all the sounds from the site
//volume from sound player is required
export interface SoundProps {
  volume: number
}

const Sound: React.SFC<SoundProps> = ({ volume }) => {
  const { stage } = useContext(StageContext)
  return (
    <>
      <HowlerCustom
        path="/audio/space/ambience/Space_Ambience_1.mp3"
        playing={stage === 1}
        volume={volume * 0.8}
        loop
      />
      <HowlerCustom
        path="/audio/space/ambience/Space_Ambience_2.mp3"
        playing={stage === 2}
        loop
        volume={volume * 0.8}
      />
      <HowlerCustom
        path="/audio/space/ambience/Space_Ambience_3.mp3"
        playing={stage === 3}
        loop
        volume={volume * 0.8}
      />
      <HowlerCustom
        path="/audio/space/Music/Space_Music_Loop_01.mp3"
        playing={stage === 4}
        volume={volume * 0.6}
        loop
      />
      <HowlerCustom
        path="/audio/space/Music/Space_Music_Loop_02.mp3"
        playing={stage === 5}
        volume={volume * 0.6}
        loop
      />
      <HowlerCustom
        path="/audio/space/Music/Space_Music_Loop_03.mp3"
        playing={stage === 6}
        volume={volume * 0.6}
        loop
      />
      <HowlerCustom
        path="/audio/space/Music/Space_Music_Loop_04.mp3"
        playing={stage === 7}
        volume={volume * 0.6}
        loop
      />

      <HowlerCustom
        path="/audio/space/SFX/Space_SFX_Heartbeat_1.mp3"
        playing={stage === 8}
        volume={volume}
        loop
      />
      <HowlerCustom
        path="/audio/space/SFX/Space_SFX_Heartbeat_2.mp3"
        playing={stage === 9}
        volume={volume}
        loop
      />
      <HowlerCustom
        path="/audio/space/SFX/Space_SFX_Heartbeat_3.mp3"
        playing={stage > 10}
        volume={volume}
        loop
      />
      <HowlerCustom
        path="/audio/space/SFX/Space_SFX_Hit_1.mp3"
        playing={stage === 11}
        volume={volume}
      />
      <HowlerCustom
        path="/audio/space/SFX/Space_SFX_Hum_1.mp3"
        playing={stage === 12}
        volume={volume}
      />
      <HowlerCustom
        path="/audio/space/SFX/Space_SFX_Gun_07_Samp.mp3"
        playing={stage === 13}
        volume={volume * 0.8}
      />
    </>
  )
}

export default Sound
