import './pubHeader.less'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class PubHeader extends Component{
  state = {
    listIsShow: false,

  }

  toggleNav = () => { 
    this.setState({listIsShow:!this.state.listIsShow})
    console.log(this.state.listIsShow)
  }

  // FirstChild = props => {
  //   const childrenArray = React.Children.toArray(props.children);
  //   return childrenArray[0] || null;
  // }

  render(){
    return (
      <div>
        <header className="header-container">
        <div className="header-item" onClick={this.toggleNav}><span><i className="iconfont icon-shebeiguanli"></i></span></div>
        <div className="header-item">{this.props.title}</div>
        {
          !this.props.confirm&&<div className="header-item"><span><i className="iconfont icon-shiyongwendang"></i></span></div>
        }
        {
          this.props.confirm&&<NavLink to="/" exact className="header-item">Sure</NavLink>
        }
        
        </header>
        <ReactCSSTransitionGroup
          component={"nav-container"} 
          transitionName="nav"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          {
            this.state.listIsShow&&<aside className="nav-container">
              <NavLink to="/" className="nav-item" onClick={this.toggleNav}><span>HOME PAGE</span><span><i className="iconfont icon-shiyongwendang"></i></span></NavLink>
              <NavLink to="/helpcenter" className="nav-item"><span>HELP CENTER</span><span><i className="iconfont icon-shiyongwendang"></i></span></NavLink>
              <NavLink to="/game" className="nav-item"><span>GAME</span><span><i className="iconfont icon-shiyongwendang"></i></span></NavLink>
            </aside>
          }
        </ReactCSSTransitionGroup>
      </div>  
    )
  }

}

export default PubHeader