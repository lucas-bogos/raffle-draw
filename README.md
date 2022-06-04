# Raffle Draw

O _Raffle Draw_, é uma simples aplicação escrita em `JavaScript`, para ajudar a mim e aos outros realizarem sorteios de números associados a um nome.

## Como funciona o app?

Basicamente, temos o arquivo `storage.js`, que é um banco de dados local. Nele, vamos definir os nomes e para cada nome, quantos números o jogador irá querer. No `main.js`, é onde fica toda a lógica da aplicação. Devido ser algo muito simples de fazer, não me preocupei com a arquitetura.

## Como fazer a base de dados?

No arquivo `storage.js`, temos um objeto de _players_, confira como inserir os dados:

```

export const players = [
  {
    numbers: [1, 2, 3],
    name: "player_name"
  },
]

```
