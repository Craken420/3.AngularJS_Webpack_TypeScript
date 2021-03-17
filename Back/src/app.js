const express = require('express'),
      cors = require('cors'),
      morgan = require('morgan')
 
const app = express()
const port = 3001
app.set('PORT', process.env.PORT || port)

// Middleware
app.use( morgan('dev') )
app.use( express.urlencoded({ extended: true }) )
app.use( express.json() )
app.use( cors() )
app.use( require('./helpers/handle-error') )

// Router
app.get( '/', (req, res) => res.send('Home') )

app.use('/users', require('./routes/users') )

module.exports = app