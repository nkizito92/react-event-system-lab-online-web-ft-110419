
import React, { Component } from 'react'
  handleKeyUp = (e) => {
    return constol.log(this.e.target)
  }
export default class Keypad extends Component {
    render() {
        return <input onKeyUp={this.handleKeyUp()} type="password" />

    }
}
