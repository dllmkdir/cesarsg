import React, { useState, useEffect, useRef } from "react"
import { useStyles, useStylesArrow } from "./styles"
import VolumeUpRoundedIcon from "@material-ui/icons/VolumeUpRounded"
import VolumeDownRoundedIcon from "@material-ui/icons/VolumeDownRounded"
import VolumeMuteRoundedIcon from "@material-ui/icons/VolumeMuteRounded"
import Slider from "@material-ui/core/Slider"
import { ClickAwayListener, Tooltip } from "@material-ui/core"
import Sound from "../Howler/Sound"
// Music Player Component at the top

// The theme determines the music that is played
interface PlayerProps {}
const Player: React.FC<PlayerProps> = () => {
  //create a ref to start the sounds
  const kickPlayRef = useRef(false)
  //open or close tooltip
  const [tooltip, setTooltip] = useState<boolean>(false)
  //tooltip reference
  const [arrowRef, setArrowRef] = React.useState<HTMLSpanElement | null>(null)
  const [volume, setVolume] = useState<number>(0)
  // set volume from slider input
  const handleVolume = (
    e: React.ChangeEvent<HTMLInputElement>,
    val: number
  ) => {
    e.preventDefault()

    setVolume(val)
  }
  // Conmute volume when player icon is pressed
  const muteVolume = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (volume > 0.1) {
      setVolume(0)
    } else {
      setVolume(1)
    }
    //start playing music
    kickPlayRef.current = true
  }

  const handleTooltip = () => {
    localStorage.setItem("csg-vol-tool", "true")
    setTooltip(false) //close tooltip
  }

  useEffect(() => {
    // First time seeing tooltip
    const initTool: any = localStorage.getItem("csg-vol-tool")
    //console.log(initTool)
    if (!initTool || initTool !== "true") {
      setTooltip(true) //show tooltip
    }
  }, [])
  // @ts-ignore
  const classes = useStyles()
  // @ts-ignore
  const { arrow, ...arrowClasses } = useStylesArrow()
  return (
    <div className={classes.root}>
      <ClickAwayListener onClickAway={handleTooltip}>
        <Tooltip
          classes={arrowClasses}
          PopperProps={{
            disablePortal: true,
            popperOptions: {
              modifiers: {
                arrow: {
                  enabled: Boolean(arrowRef),
                  element: arrowRef,
                },
              },
            },
          }}
          onClose={handleTooltip}
          open={tooltip}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title={
            <React.Fragment>
              Click for Music!
              <span className={arrow} ref={setArrowRef} />
            </React.Fragment>
          }
        >
          <div className={`${classes.iconBox}`} onClick={muteVolume}>
            {/* Volume Icons */}
            {volume === 0 && <VolumeMuteRoundedIcon className={classes.icon} />}
            {volume > 0 && volume <= 0.6 && (
              <VolumeDownRoundedIcon className={classes.icon} />
            )}
            {volume > 0.6 && <VolumeUpRoundedIcon className={classes.icon} />}
          </div>
        </Tooltip>
      </ClickAwayListener>

      {/* Slider */}
      <div className={classes.sliderBox}>
        <Slider
          className={classes.slider}
          aria-labelledby="label"
          onChange={handleVolume}
          min={0}
          max={1}
          step={0.01}
          value={volume}
        />
      </div>

      {/* Howler Sounds */}
      <Sound volume={volume} kickPlayRef={kickPlayRef.current} />
    </div>
  )
}

export default Player
