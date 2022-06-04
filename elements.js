/**
 * Seleção de elementos da DOM
 */

// Botão que realiza sorteio
export const button = document.querySelector("button[id='draw']")

// Número atual do sorteio
export const number = document.querySelector('#value')

// Container principal
export const container = document.querySelector('.container')

// Botão configurar
export const setConfig = document.querySelector("button[id='config']")

// Campo de configuração do título
export const title = document.querySelector("#title")

// Seleção de cor
export const color = document.querySelector("input[type='color']")

// Para setar a cor no circulo do sorteio
export const raffle = document.querySelector(".container .raffle")
