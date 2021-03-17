const http = require('http'),
    app = require('./app')
    server = http.createServer(app)

//BD
require('./bd/bd')

server.listen(app.get('PORT'), () => {
    console.log(`Server is runnnig on: http://localhost:${app.get('PORT')}`)
})
