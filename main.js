const parallax = document.querySelector('.bgimg-1')



window.addEventListener('scroll', () => {
  let offset = window.pageYOffset
  parallax.style.backgroundPositionY = offset*.7+'px'
})


// window.addEventListener('scroll', () => {
//   let offset = window.pageYOffset
//   parallax2.style.backgroundPositionY = offset*.6+'px'
// })