const express = require('express')

const routes = express.Router()

routes.get('/', (request, response) => {
  return response.status(200).json({
    resposta: "Rota Princial do Projeto"
  })
})


module.exports = routes