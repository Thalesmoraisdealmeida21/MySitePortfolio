const express = require('express')

const app = express();



app.listen('8080', (req, res) => {
    console.log('Server has stardeds on port 9090')
})


app.get('/', (req, res) => {
    res.send('Hello World !')
})