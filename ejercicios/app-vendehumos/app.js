const http = require('http')
const express = require('express')
require('dotenv').config()
const routes = require('./routes/routes.js')

const URL_BASE = process.env.URL_BASE || 'http://localhost'
const PORT = process.env.PORT || 4000

const app = express()

app.use(routes)

const server = http.createServer(app)

server.listen(PORT, () => {
    console.log(`Listening on ${URL_BASE}:${PORT}`)
})

