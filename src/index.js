import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import Route from './router/index.js';
// import Home from './pages/home/home'
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { AppContainer } from 'react-hot-loader'
import './utils/setRem.js'
import './style/base.css'
import './style/iconfont.css'


FastClick.attach(document.body)

const render = Component =>{
  ReactDOM.render(  
    <AppContainer>
      <Component />
    </AppContainer>,
      document.getElementById('root')
  )
}
render(Route)

if (module.hot) {
  module.hot.accept('./router/index.js', () => {
    render(Route);
  })
}
// ReactDOM.render(<Route />, document.getElementById('root'));

// ReactDOM.render(<Home />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
