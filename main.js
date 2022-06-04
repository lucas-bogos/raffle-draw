/**
 * JavaScript Principal
 */

import { players } from './storage.js'
import { getNumberInt } from './utils/get-number-int.js'
import { sleep } from './utils/sleep.js'
import { button, container, number, title, raffle, color } from './elements.js'
const timeout = 5000 // 5 segundos

var url_string = window.location.href
var url = new URL(url_string)

if(url.searchParams.get('title') != (null || undefined)) {
  title.innerText = url.searchParams.get('title') // obtem query string
}


if(localStorage.getItem('color') != undefined) {
  raffle.style = `background-color: ${localStorage.getItem('color')};`;
}

const showWinner = (name) => {
  const custom = `
    font-size: 22px;
    color: #2a1e5c;
    font-weight: bold;
  `
  const p = document.createElement('p')
  p.setAttribute('style', custom)
  p.innerHTML = `Parabéns ${name}!`
  container.appendChild(p)

  setTimeout(() => {
    number.innerHTML = 0
    p.remove()
  }, timeout + 10000)
}

const getNameWinner = (valueNow) => {
  players.forEach((player) => {
    player.numbers.forEach((number) => {
      if (number === valueNow) {
        showWinner(player.name)
      }
    })
  })
}

const loader = () => {
  const gif = document.createElement('img')
  gif.setAttribute('src', './assets/images/loading.gif')
  gif.setAttribute('width', '50')
  number.innerHTML = ''
  number.appendChild(gif)
}

const confetti = () => {
  const gif = document.createElement('img')
  gif.setAttribute('src', './assets/images/confete.gif')
  gif.setAttribute('width', '100%')
  gif.setAttribute('style', 'position: absolute;')
  container.appendChild(gif)
  setTimeout(() => {
    gif.remove()
  }, timeout)
}

button.addEventListener('click', async () => {
  const response = getNumberInt(1, 50)
  const pause = 500 // meio segundo

  setTimeout(() => {
    number.innerHTML = response
    getNameWinner(response)
    sleep(pause)
    confetti()
  }, timeout)

  loader()
})
