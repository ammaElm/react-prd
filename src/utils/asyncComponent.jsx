import React, { Component } from 'react'


export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }

    // componentWillMount(){
    //   if(this.hasLoadedComponent()){
    //     return;
    //   }
  
    //   importComponent()
    //     .then(module=>module.default)
    //     .then((Component)=>{
    //       this.setState({ Component });
    //     })
    //     .catch((err)=>{
    //       console.error(`Cannot load component in <AsyncComponent />`);
    //       throw err;
    //     })  
    // }

    // hasLoadedComponent() {
    //   return this.state.Component !== null;
    // }

    async componentDidMount() {
      const { default: component } = await importComponent();
      console.log({component})
      this.setState({component});
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}

// export const asyncComponent = loadComponent => {
//   class AsyncComponent extends Component{
//     state = {
//       Component: null,
//     }

//     componentWillMount(){
//       if(this.hasLoadedComponent()){
//         return;
//       }
  
//       loadComponent()
//         .then(module=>module.default)
//         .then((Component)=>{
//           this.setState({ Component });
//         })
//         .catch((err)=>{
//           console.error(`Cannot load component in <AsyncComponent />`);
//           throw err;
//         })
  
//     }
  
//     hasLoadedComponent() {
//       return this.state.Component !== null;
//     }

//     render() {
//       const { Component } = this.state;
//       return (Component) ? <Component {...this.props} /> : null;
//     }

//   }
// }