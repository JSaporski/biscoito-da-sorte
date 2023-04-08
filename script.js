// Elements & Variables
const phrases = [
  '“É em meio a dificuldade que se encontra a oportunidade”.',
  '“O êxito é ir de frustração a frustração sem perder a animação”.',
  '“Mesmo que algo pareça difícil, nunca desista antes de tentar”.',
  '“Não é uma vida ruim, é apenas um dia ruim, lembre-se disso”.',
  '“Que os dias bons se tornem rotina, e os ruins se tornem raros”.',
  '“Já pensou que você já superou muitas dificuldades até aqui?”.',
  '“Cada dificuldade ultrapassada te faz mais forte”.',
  '“Desistir não deve ser considerado, mesmo que as coisas não sejam fáceis”.',
  '“Conheci o pior das pessoas e o melhor de mim, passando por tempos difíceis”.',
  '“Mesmo que nem todo dia seja bom, há algo de bom todo dia”.',
  '“A superação da dificuldade depende apenas de você“.',
  '“Você terá possibilidade de ganhar, enquanto tiver força para lutar”.',
  '“Não há outra forma de crescer, senão superar os desafios e os medos. Deixe-os vir”.'
]
const sectionLuck = document.querySelector('#mainContent .luck')
const cookie = sectionLuck.querySelector('.btn-show-phrase')
const anotherCookie = document.querySelector('#mainContent .btn-another-cookie')
let phrase = document.querySelector('#mainContent .your-luck p')
let randomNumberPhrase = Math.round(Math.random() * (phrases.length - 1))

// Functions || Callbacks
function handleShowPhrase(event) {
  event.preventDefault()
  phrase.innerText = `${phrases[randomNumberPhrase]}`

  handleHideOrShow()
}

function handleHideOrShow() {
  document.querySelector('#mainContent .luck').classList.toggle('hide')
  document.querySelector('#mainContent .your-luck').classList.toggle('hide')
}

function handleResetCookie(event) {
  event.preventDefault()
  randomNumberPhrase = Math.round(Math.random() * (phrases.length - 1))

  handleHideOrShow()
}

function handleResetOnEnter(event) {
  if (event.key === 'Enter' && sectionLuck.classList.contains('hide')) {
    randomNumberPhrase = Math.round(Math.random() * (phrases.length - 1))
    handleHideOrShow()
  }
}

// Events
cookie.addEventListener('click', handleShowPhrase)
anotherCookie.addEventListener('click', handleResetCookie)
window.addEventListener('keydown', handleResetOnEnter)
