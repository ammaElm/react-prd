import './pubHeader.less'
import React, { Component } from 'react'


class PubHeader extends Component{
  state = {

  }

  render(){
    return (
      <header className="header-container">
        <div className="header-item"><span><i className="iconfont icon-shebeiguanli"></i></span></div>
        <div className="header-item">HOME PAGE</div>
        <div className="header-item"><span><i className="iconfont icon-shiyongwendang"></i></span></div>
      </header>
    )
  }

}

export default PubHeader