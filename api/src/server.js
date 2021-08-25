const express = require('express')
const routes   = require('./routes')

require('dotenv/config')

const app = express()

app.use(express.urlencoded({extended: true}))

app.use(routes)

app.listen(process.env.BACKEND_PORT, () => {
  console.log(`Server APP TO MERN Executando na porta`, process.env.BACKEND_PORT)
})