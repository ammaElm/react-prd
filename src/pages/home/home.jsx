import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './home.less'
// import { padStr } from '../../utils/mixin.js'
import { padStr } from '@/utils/mixin';


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
      orderSum: '',
      name: '111',
      phoneNo: '',
    },
  }

  selectedProList=[];

  handleInput = (type,event) => {
    let value = event.target.value;
    let formData = this.state.formData;
    switch(type){
      case 'orderSum':
        value = value.replace(/\D/g,'');
        formData.orderSum = value
        break;
      case 'name':
        formData.name = value
        break;
      case 'phoneNo':
        value = padStr(value.replace(/\D/g,''),[3,7],'',event.target);
        formData.phoneNo = value
        break;
        default:;
      }
  
      // this.props.saveFormData(value,type);
      

      this.setState({
        formData:formData
      })
      console.log(this.state.formData)
  }


  render() {
    return (
      <main className="home-container">
        <p className="common-title">welcoming,please input your informatin </p>
        <form className="home-form">
          <div className="home-form-item">
            <span>sales acount :</span>
            <input type="text" placeholder="please input sales acount" value={this.state.formData.orderSum} onChange={this.handleInput.bind(this,'orderSum')}/>
          </div> 
          <div className="home-form-item">
            <span>customer name :</span>
            <input type="text" placeholder="please input customer name" value={this.state.formData.name} onChange={this.handleInput.bind(this,'name')}/>
          </div>  
          <div className="home-form-item">
            <span>sales phone :</span>
            <input type="text" placeholder="please input sales phone" value={this.state.formData.phoneNo} onChange={this.handleInput.bind(this,'phoneNo')}/>
          </div>   
        </form>
      </main>
    )
  }

}

export default Home