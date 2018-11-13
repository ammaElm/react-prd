import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './home.less'
// import { padStr } from '../../utils/mixin.js'
import { padStr } from '@/utils/mixin.js';
import PubHeader from '../../components/pubHeader/pubHeader'
import OpacityTouch from '../../components/opacityTouch/opacityTouch'


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
  infoSubmit = () => {
    
  }


  render() {
    return (
      <main className="home-container">
        <PubHeader title="HOME PAGE"/>
        <p className="common-title">welcoming,please input your informatin </p>
        <form className="home-form">
          <div className="home-form-item">
            <span>sales acount :</span>
            <input type="text" placeholder="sales acount" value={this.state.formData.orderSum} onChange={this.handleInput.bind(this,'orderSum')}/>
          </div> 
          <div className="home-form-item">
            <span>customer name :</span>
            <input type="text" placeholder="customer name" value={this.state.formData.name} onChange={this.handleInput.bind(this,'name')}/>
          </div>  
          <div className="home-form-item">
            <span>sales phone :</span>
            <input type="text" placeholder="sales phone" value={this.state.formData.phoneNo} onChange={this.handleInput.bind(this,'phoneNo')}/>
          </div>   
        </form>
        <div className="upload-img-con">
          <p className="common-title">please choose what you prefer ~</p>
          <div className="file-lable">
            <span className="common-select-btn">upload image</span>
            <input type="file" onChange={this.uploadImg}/>
          </div>
          {/* <img src={this.props.formData.imgpath} className="select-img" alt=""/> */}
        </div>
        <div className="upload-img-con">
          <p className="common-title">please upload your image</p>
          <div className="file-lable">
            <span className="common-select-btn">upload image</span>
            <input type="file" onChange={this.uploadImg}/>
          </div>
          {/* <img src={this.props.formData.imgpath} className="select-img" alt=""/> */}
        </div>
        <OpacityTouch className="submit-btn" clickCallBack={this.infoSubmit}></OpacityTouch>
      </main>
    )
  }

}

export default Home