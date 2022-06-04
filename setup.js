/**
 * Preferências do usuário
 */

import { setConfig, title, color } from  './elements.js'

setConfig.addEventListener("click", (event) => {
  event.preventDefault()
  window.location.href = `https://lucas-bogos.github.io/raffle-draw/?title=${title.value}`
  localStorage.setItem('color', `${color.value}`);
})
