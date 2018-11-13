import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import asyncComponent from '@/utils/asyncComponent'

import home from '@/pages/home/home'
// const help = require()
// import help from '../pages/help/help.jsx'
// import game from '../pages/game/game.jsx'
const help = asyncComponent(()=>import("../pages/help/help"))
const game = asyncComponent(()=>import("../pages/game/game"))

export default class RouteConfig extends Component{
  render(){
    return(
      <HashRouter>
        <Switch>
          <Route path="/" exact component={home}></Route>
          <Route path="/helpcenter" exact component={help}></Route>
          <Route path="/game" exact component={game}></Route>
        </Switch>
      </HashRouter>
    )
  }
}