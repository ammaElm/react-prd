import axios from 'axios'

const service = axios.create({
  timeout: 5000,
})


// service.interceptors.request.use(
//   config => {

//   },
//   err => {

//   }
// )

service.interceptors.response.use(
  response => response,
  err => {
    console.log('err'+err)

    return Promise.reject(err)
  }
)

export default service