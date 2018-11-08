import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
// import asyncComponent from '@/utils/asyncComponent'

import home from '@/pages/home/home'

export default class RouteConfig extends Component{
  render(){
    return(
      <HashRouter>
        <Switch>
          <Route path="/" exact component={home}></Route>
        </Switch>
      </HashRouter>
    )
  }
}