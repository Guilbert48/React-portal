const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')

app.use(routes)

app.use(express.static(path.resolve(__dirname, 'frontend')))

app.set('views', path.resolve(__dirname, 'src', 'views'))

app.listen(30000, () =>{
    console.log('http://localhost:30000')
})