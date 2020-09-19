import React, { Component } from "react"
import ReactHowler from "react-howler"
import PropTypes from "prop-types"
import { isIOS } from "react-device-detect"
type HowlerCustomProps = {
  volume: number
  playing: boolean
  path: string
  loop?: boolean
  kickPlay: boolean
}
type HowlerCustomState = {
  internal_volume: number
  active: boolean
  inFade: boolean
}
class HowlerCustom extends Component<HowlerCustomProps, HowlerCustomState> {
  static propTypes: {
    path: PropTypes.Validator<string>
    volume: PropTypes.Validator<number>
    playing: PropTypes.Validator<boolean>
    loop?: PropTypes.Validator<boolean>
    kickPlay: PropTypes.Validator<boolean>
  }
  interval: number
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      inFade: false,
      internal_volume: this.props.volume,
    }
  }
  timerActive = () => {
    var newCount = this.state.internal_volume - 0.05
    if (newCount > 0) {
      this.setState({ internal_volume: newCount })
      //console.log(this.state.internal_volume)
    } else {
      clearInterval(this.interval)
      this.setState({ active: false, inFade: false, internal_volume: 0 })
      //console.log("interval cleared")
    }
  }
  timerNotActive = () => {
    var newCount = this.state.internal_volume + 0.05
    if (newCount < this.props.volume) {
      this.setState({ internal_volume: newCount })
      //console.log(this.state.internal_volume)
    } else {
      clearInterval(this.interval)
      this.setState({
        active: true,
        inFade: false,
        internal_volume: this.props.volume,
      })
      //console.log("interval cleared")
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.playing !== this.state.active && !this.state.inFade) {
      this.setState({ inFade: true })
      if (this.state.active) {
        this.interval = setInterval(() => {
          this.timerActive()
        }, 10)
        //console.log("timercreated")
      } else {
        this.interval = setInterval(() => {
          this.timerNotActive()
        }, 10)
        //console.log("timercreated")
      }
    }
    if (this.state.active && nextProps.volume !== this.state.internal_volume) {
      ////console.log("volume missing!")
      this.setState({ internal_volume: nextProps.volume })
    }
  }

  render() {
    const { path } = this.props
    return (
      <ReactHowler
        src={path}
        playing={this.props.kickPlay}
        volume={this.state.internal_volume}
        loop={this.props.loop}
        html5={!isIOS}
      />
    )
  }
}
HowlerCustom.propTypes = {
  path: PropTypes.string.isRequired,
  volume: PropTypes.number.isRequired,
  playing: PropTypes.bool.isRequired,
  loop: PropTypes.bool,
  kickPlay: PropTypes.bool,
}
export default HowlerCustom
