(function(psdw){ 
  let remSize = 0
  let scale = 0
  let dpr = window.devicePixelRatio
  console.log(dpr)
  // let domEle = document.documentElement
  let currentWidth = document.documentElement.clientWidth
  scale = currentWidth/psdw
  console.log(scale)
  remSize = psdw/10
  remSize = remSize*scale
  document.documentElement.style.fontSize = remSize + 'px'
  console.log(document.documentElement.style.fontSize)
  document.documentElement.setAttribute('data-dpr',dpr)
})(750)

