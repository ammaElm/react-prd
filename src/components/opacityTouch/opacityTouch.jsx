import React, { Component } from 'react'
import './opacityTouch.less'

class OpacityTouch extends Component {

  handleTouchStart = () => {
    this.refs.btn.style.opacity = '0.3'
  }
  handleTouchEnd = () => {
    this.refs.btn.style.opacity = '1'
    this.props.clickCallBack()
  }

  render () {
    return (
      <div>
        <div className={`btn-con ${this.props.className}`} onTouchStart={this.handleTouchStart} onTouchEnd={this.handleTouchEnd} ref="btn">Submit</div>
      </div>
    )
  }
}

export default OpacityTouch