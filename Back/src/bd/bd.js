const mongoose = require('mongoose')

const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect('mongodb://localhost/basicUsers', options).then(
    () => {
      console.log("Database connection established!")
    },
    err => {
      console.log("Error connecting Database instance due to: ", err)
    }
)
