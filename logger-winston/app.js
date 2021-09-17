const path = require('path');
const express = require('express');
const winston = require('winston');

// LEVELS: error, warn, info, http, verbose, debug, silly
// tail -f archivo


const myFormat = winston.format.printf(({message, level, timestamp}) => {
  return `[${level} - ${timestamp}] ${message}`
})

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: path.join(__dirname, 'logs', 'error.log'),
      level: 'error',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.prettyPrint(),
      )
    }),
    new winston.transports.File({
      filename: path.join(__dirname, 'logs', 'all.log'),
      format: winston.format.combine(
        winston.format.timestamp(),
        myFormat
      )
    }),
    new winston.transports.Console({
      level: 'info' // Si ponemos debug loguea todo, pero si subimos de nivel, solo loguea de ese nivel hacia arriba
    })
  ]
})


const app = express()

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`)
})

app.use('/warn', () => {
  logger.warn('Warn 1')
})

app.use('/error', () => {
  logger.error('Error 1')
})

app.use('/info', () => {
  logger.info('Info 1')
})

app.use('/debug', () => {
  logger.debug('Debug 1')
})


app.listen(3000, () => {
  console.log('App listening on http://localhost:3000')
})