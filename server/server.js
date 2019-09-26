
const express = require('express') // cria um servidor na porta 8000

const server = express()

const cors = require('cors') // permite a comunicação entre a aplicação react e o servidor
//cors é utilizado porque a aplicação react e o servidor estão em portas diferentes

const upload = require('./upload') // requisição do arquivo para fazer o upload

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
} 

server.use(cors(corsOptions))

server.post('/upload', upload)

server.listen(8000, () => {
    console.log('Server started!')
  })