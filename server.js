// import modules

import express from 'express'
import { games } from './data/todo-data.js'

// create Express app

const app = express()

// configure the app (app.set)

app.set('view engine', 'ejs')

// mount Middleware (app.use)



// mount routes
app.get('/home', function (req, res) {
  res.render('home')
})

app.get('/games', function (req, res) {
  res.render('games/index', {
    games: games
  })
})

app.get('/', function (req, res) {
  res.redirect('/home')
})
// tell the app to listen on port 3000

app.listen(3000, function () {
  console.log('Listening on port 3000')
})