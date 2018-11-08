import React from 'react'
import ReactDOM from 'react-dom'

export default function asyncComponent ( importComponent ){

  class AsyncComponent extends ReactDOM.component{
    constructor( props ){
      super(props);

      this.state = {
        component : null
      };
    }

    async componentDidMounted(){
      const { default : component } = await importComponent()

      this.setState({component})
    }
    
    render(){
      const C = this.state.component;
      
      return C ? <C {...this.props}/> : null

    }
  }

  return AsyncComponent;

}