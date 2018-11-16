import * as pro from './action-type'
import { getProduction } from '../../api/api.js'


//初始化获取商品数据，保存至redux
export const getProData = () => {
  // getProduction().then(res=>{
  //   let result = res.data
  //   result.map(item => {
  //     item.selectStatus = true
  //     item.selectNum = 0
  //     return item 
  //   })
  //   dispatch({

  //   })
  // })

  return async dispatch => {
    try{
      let result = await getProduction()
      let res = result.data.data.data
      res.map(item => {
        item.selectStatus = true;
        item.selectNum = 0;
        return item;
      })
      dispatch({
        type: pro.GETPRODUCTION,
        dataList: res,
      })

    }catch(err){
      console.error(err)
    }
  }
}

//选择商品
export const togSelectPro = index => {
  return {
    type: pro.TOGGLESELECT,
    index,
  }
}

//编辑商品
export const editPro = (index,selectNum) => {
  return {
    type: pro.EDITPRODUCTION,
    index,
    selectNum
  }
}

//清空选择
export const clearSelected = () => {
  return {
    type: pro.CLEARSELECTED,

  }
}
