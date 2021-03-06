const express = require('express')
const routes = require('./routes')

const server = express()

server.set('view engine', 'ejs')

server.use(express.static("public"))

server.use(express.urlencoded({ extended: true }))

server.use(routes)

server.listen(3000, () => console.log('servidor rodando'))