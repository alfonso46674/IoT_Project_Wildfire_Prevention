const express = require('express')
const path = require('path')
const cors = require('cors')
//const fs = require('fs')
// const https = require('https')
const {url} = require('../src/config/env_variables')

//import routes to use
const router = require('./routes/index.js')

const app = express()

const PORT = 8081
const HOST = '0.0.0.0'

//For a https server certification
// const key = fs.readFileSync('server/keys/key.pem')
// const certificate = fs.readFileSync('server/keys/cert.pem')
// let options = {
//     key: key,
//     cert:certificate
// }

//server static build of react project
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.normalize('build')))
}

const {json, urlencoded} = express

//basic parse configuration
app.use(json())
app.use(urlencoded({extended:false}))
app.use(cors())

//send request to the router
app.use(router)

//start https server
//let server = https.create(options,app)
//server.listen(PORT,()=>{console.log(`Server on port: ${PORT} and host ${HOST}`)})

app.listen(process.env.PORT || PORT,HOST,()=>{console.log(`Server on port: ${PORT} and host ${HOST}`)});


// let server = http.createServer(app)
// server.listen(PORT,'localhost',()=>{console.log(`Server on port: ${server.address().port} and host ${server.address().address}`)})
