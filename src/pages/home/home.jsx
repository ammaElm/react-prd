import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './home.less'
// import { padStr } from '../../utils/mixin.js'
import { padStr } from '@/utils/mixin.js';
import PubHeader from '../../components/pubHeader/pubHeader'
import OpacityTouch from '../../components/opacityTouch/opacityTouch'
import { uploadIMG, getRecord } from '../../api/api.js'
import $envconfig from '../../utils/envconfig.js'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { saveFormData, saveImg, clearData } from '@/store/home/action'
import { clearSelected } from '@/store/production/action'


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

  // state = {
  //   alertStatus:false,
  //   alertTip: '',
  //   formData: {
  //     orderSum: '',
  //     name: '111',
  //     phoneNo: '',
  //   },
  //   imgSrc:'',
  // }

  selectedProList=[];

  componentWillMount(){
    // this.getRecord('passed')
    this.initData(this.props)
  }

  handleInput = (type,event) => {
    let value = event.target.value;
    // let formData = this.state.formData;
    switch(type){
      case 'orderSum':
        value = value.replace(/\D/g,'');
        // formData.orderSum = value
        break;
      case 'name':
        // formData.name = value
        break;
      case 'phoneNo':
        value = padStr(value.replace(/\D/g,''),[3,7],'',event.target);
        // formData.phoneNo = value
        break;
        default:;
      }
      
      // this.setState({
      //   formData:formData
      // })
      // console.log(this.state.formData)
      
      this.props.saveFormData( value, type)
      // debugger;
      console.log(this.props.formData)
  }
  uploadImg = event => {
    let formdata = new FormData()
    console.log(event.target.files[0])
    formdata.append('file', event.target.files[0])
    console.log(formdata)
    uploadIMG(formdata).then(res=>{
      if(res.data&&res.data.status===1){
        // this.setState({imgSrc:$envconfig.imgSrc+res.data.image_path})
        // console.log(this.state.imgSrc)
        this.props.saveImg($envconfig.imgSrc+res.data.image_path)
        console.log(this.props.formData)
        // debugger;
      }
    })

  }

  infoSubmit = () => {
    
  }
  
  getRecord = async type =>{
    await getRecord({type})
  }

  initData = props => {
    this.selectedProList = []
    props.proData.dataList.forEach(item=>{
      if(item.selectStatus&&item.selectNum){
        this.selectedProList.push(item)
      }
    })
  }

  

  render() {
    return (
      <main className="home-container">
        <PubHeader title="HOME PAGE"/>
        <p className="common-title">welcoming,please input your informatin </p>
        <form className="home-form">
          <div className="home-form-item">
            <span>sales acount :</span>
            <input type="text" placeholder="sales acount" value={this.props.formData.orderSum} onChange={this.handleInput.bind(this,'orderSum')}/>
          </div> 
          <div className="home-form-item">
            <span>customer name :</span>
            <input type="text" placeholder="customer name" value={this.props.formData.name} onChange={this.handleInput.bind(this,'name')}/>
          </div>  
          <div className="home-form-item">
            <span>sales phone :</span>
            <input type="text" placeholder="sales phone" value={this.props.formData.phoneNo} onChange={this.handleInput.bind(this,'phoneNo')}/>
          </div>   
        </form>
        <div className="upload-img-con">
          <p className="common-title">please choose what you prefer ~</p>
          <Link to="/production" className="common-select-btn">
            {
              this.selectedProList.length?<ul className="selected-pro-list">
              {
                this.selectedProList.map((item,index)=>{
                  return <li key={index} className="selected-pro-item ellipsis">{item.product_name}x{item.selectNum}</li>
                })
              }</ul>:'select what you prefer'
            }
          </Link>
        </div>
        <div className="upload-img-con">
          <p className="common-title">please upload your image</p>
          <div className="file-lable">
            <span className="common-select-btn">upload image</span>
            <input type="file" onChange={this.uploadImg}/>
          </div>
          <img src={this.props.formData.imgSrc} className="select-img" alt=""/>
        </div>
        <OpacityTouch className="submit-btn" clickCallBack={this.infoSubmit}></OpacityTouch>
      </main>
    )
  }

}

export default connect(state => ({
  formData: state.formData,
  proData: state.proData
}),{
  saveFormData,
  saveImg,
  clearData,
  clearSelected
})(Home)