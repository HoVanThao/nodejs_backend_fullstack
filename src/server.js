require('dotenv').config()

const { render } = require('ejs')
const express = require('express') //commonjs
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const mysql = require('mysql2')
const { table } = require('console')

// console.log('>>>  check env: ', process.env)

const app = express() // app cua express
const port = process.env.PORT || 8888 //port
const hostname = process.env.hostname

//config tamplate engine, nói cho thằng express biết là sài nó
configViewEngine(app)

// khai bao route
app.use('/', webRoutes)

//test connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307, //default:3306
    user: 'root',
    password: '123456',
    database: 'hovanthao',
})

connection.query(
    'SELECT * FROM Users u',
    function (err, results, fields) {
        console.log(">>> results = ", results)
        console.log(">>> fields = ", fields)
    }
);

//
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})