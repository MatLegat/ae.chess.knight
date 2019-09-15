import express from 'express'
import proxy from 'express-http-proxy'
import bodyParser from 'body-parser'
import config from '../vue.config'
import knightMoves from './endpoints/knightMoves.js'

export default (app) => {
  app.use(express.json())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded())
  
  app.get('/api/knight-one-move', knightMoves.movesInOneTurn)
  app.post('/api/knight-one-move', knightMoves.movesInOneTurn)

  app.get('/api/knight-two-moves', knightMoves.movesInTwoTurns)
  app.post('/api/knight-two-moves', knightMoves.movesInTwoTurns)

  const error404 = (req, res) => {
    res.status(404).json({err: 'Invalid endpoint'})
  }

  app.get('/api/*', error404)
  app.post('/api/*', error404)
  
  // Fallback to Vue app on dev env
  if (process.env.NODE_ENV != 'production') {
    app.use(proxy(`http://${config.devServer.host}:${config.devServer.port}/`))
  }

}
