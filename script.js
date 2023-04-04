const cookie = document.querySelector('#mainContent .luck img')
const btnAnotherCookie = document.querySelector(
  '#mainContent .btn-another-cookie'
)

cookie.addEventListener('click', () => {
  document.querySelector('#mainContent .luck').classList.toggle('hide')
  document.querySelector('#mainContent .your-luck').classList.toggle('hide')
})

btnAnotherCookie.addEventListener('click', () => {
  window.location.reload()
})
