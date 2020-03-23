import React, { Component } from 'react'
import Wheel from './components/Wheel'
import Hex from './components/Hex'

class App extends React.Component {
  // state = {
  //   displayColor: '',
  //   colorHue: this.props.initialDisplayedHue,
  //   hueInputBox: '',
  //   colorSaturation: this.props.initialDisplayedSat,
  //   colorLightness: this.props.light,
  // }

  render() {
    return (
      <>
        <Wheel />
      </>
    )
  }
}
export default App
