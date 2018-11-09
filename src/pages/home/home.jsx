import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './home.less'

class Home extends Component{
  // static propTypes = {
  //   formData: PropTypes.object.isRequired,
  //   saveFormData: PropTypes.func.isRequired,
  //   saveImg: PropTypes.func.isRequired,
  //   clearData: PropTypes.func.isRequired,
  //   clearSelected: PropTypes.func.isRequired
  // }
  // constructor(){

  // }
  state = {
    alertStatus:false,
    alertTip: '',
    formData: {
      name:111,
    },
  }

  selectedProList=[];

  handleInput = (type,event) => {
    let value = event.target.value;
    switch(type){
      case 'orderSum':
        value = value.replace(/\D/g,'');
        break;
      case 'name':
        break;
      case 'phoneNo':
        value = this.padStr(value.replace(/\D/g,''),[3,7],'',event.target);
        break;
        default:;
      }
      // let state = this.state.slive(0)
      // this.props.saveFormData(value,type);
      let formData = this.state.formData.slice(0)
      
      this.setState({
        formData:formData
      })
  }


  render() {
    return (
      <main className="home-container">
        <p className="common-title">请录入你的信息</p>
        <form className="home-form">
          <div className="home-form-item"></div>
            <span>销售金额：</span>
            <input type="text" placeholder="请输入订单金额" value={this.state.formData.name} onChange={this.handleInput.bind(this,'name')}/>
  
        </form>
      </main>
    )
  }

}

export default Home