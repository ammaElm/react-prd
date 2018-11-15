import * as pro from './action-type'
import Immutable from 'immutable'
// import { state } from 'fs';

let defaultState = {
  /**
   * 商品数据
   * @type {Array}
   * example:n[{
   *    product_id: 1,商品ID
   *    product_name: "PaiBot(2G/32G)",商品名称
   *    product_price: 2999,商品价格
   *    commission: 200,佣金
   *    selectStatus: false,是否选择
   *    selectNum: 0,选择数量
   * }]
   */
  dataList: [],
}

export const proData = ( state = defaultState, action ) => {
  let imuDataList
  let imuItem
  switch (action.type) {
    case pro.GETPRODUCTION:
      return {...state,...action}
    case pro.TOGGLESELECT:
      imuDataList = Immutable.List(state.dataList)
      imuItem = Immutable.Map(state.dataList[action.index])
      imuItem = imuItem.set('selectStatus', !imuItem.get('selectStatus'))
      imuDataList = imuDataList.set(action.index, imuItem)
      return {...state,...{dataList:imuDataList.toJs()}}
    case pro.EDITPRODUCTION:
      imuDataList = Immutable.List(state.dataList)
      imuItem = Immutable.Map(state.dataList[action.index])
      imuItem = imuItem.set('selectNum', action.selectNum)
      imuDataList = imuDataList.set(action.index, imuItem)
      return {...state,...{dataList:imuDataList.toJs()}}
    case pro.CLEARSELECTED:
      imuDataList = Immutable.List(state.dataList)
      for (let i = 0;i<state.dataList.length;i++){
        imuDataList = imuDataList.update(i,item=>{
          item = item.set('selectStatus',false)
          item = item.set('selectNum',0)
          return item
        })
      }
      return {...state,...{dataList:imuDataList.toJS()}}
    default:
      return state
  }

}