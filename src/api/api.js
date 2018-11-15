import request from '../utils/request.js'
import $envconfig from '../utils/envconfig.js'
// import React, { Component } from 'react'

// class API extends Component {

//   uploadIMG(query){
//     return request({
//       url: '/article/list',
//       method: 'post',
//       data: query
//     })
//   }


// }


// export default API

let baseUrl = $envconfig.baseURL
let imgUrl = $envconfig.imgUrl

export function uploadIMG(file){
  return request({
    url: imgUrl+'/v1/addimg/shop',
    method: 'post',
    data: file
  })
}

export function getRecord(params){
  return request({
    url: `${baseUrl}/shopro/data/record/${params.type}`,
    method: 'get',
    // params: query
  })
}

export function getProduction(params){
  return request({
    url: `${baseUrl}/shopro/data/products`,
    params: params
  })
  
}