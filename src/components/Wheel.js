import React, { Component } from 'react'
import axios from 'axios'

export class Wheel extends Component {
  state = {
    displayHex: '',
    selectedColor: this.props.initialColor,
    colorHue: this.props.initialDisplayedHue,
    hueInputBox: '',
    colorSaturation: this.props.initialDisplayedSat,
    satInputBox: '',
    colorLightness: this.props.light,
    lightInputBox: '',
  }

  trackHueChange = e => {
    console.log(e.target.value)
    this.setState({
      hueInputBox: e.target.value,
    })
  }
  // no needed
  // changeHue = () => {
  //   this.setState({
  //     colorHue: this.state.hueInputBox,
  //   })
  // }

  trackSatChange = e => {
    console.log(e.target.value)
    this.setState({
      satInputBox: e.target.value,
    })
  }

  trackLightChange = e => {
    console.log(e.target.value)
    this.setState({
      lightInputBox: e.target.value,
    })
  }

  handleChangeComplete = color => {
    this.setState({ background: color.hex })
  }

  // showColor = async () => {
  //   const userHue = await axios.get(hueInputBox)
  //   const userSat = await axios.get(satInputBox)
  //   const userLight = await axios.get(lightInputBox)
  //   this.setState({
  //     background,
  //   })
  // }

  render() {
    console.log('rendering page')
    return (
      <>
        <section class="container">
          <div class="slider">
            Hue
            <input
              onChange={this.trackHueChange}
              type="range"
              min="0"
              max="360"
              step="1"
              id="hue"
            ></input>
            Saturation
            <input
              onChange={this.trackSatChange}
              type="range"
              min="1"
              max="100"
              step="1"
              id="sat"
              // onClick={this.changeSat}
            ></input>
            Lightness
            <input
              onChange={this.trackLightChange}
              type="range"
              min="1"
              max="100"
              step="1"
              id="light"
              // onClick={this.changeLight}
            ></input>
            <div
              style={{
                backgroundColor: `hsl(${this.state.hueInputBox},${this.state.satInputBox}%,${this.state.lightInputBox}%)`,
              }}
            >
              <h2 class="Display=Text">
                hsl({this.state.hueInputBox},{this.state.satInputBox}%,
                {this.state.lightInputBox}%)
              </h2>
            </div>
            {/* <div style={{
              text: 'my text',
            }}
            </div> */}
          </div>
          {/* <input>Try a random!</input> */}
        </section>
      </>
    )
  }
}

document.addEventListener('DOMContentLoaded', Wheel)

export default Wheel
