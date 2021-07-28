//Importando os módulos
const express = require('express')
const socket = require('socket.io')
const app = express()
const server = require('http').Server(app)
const rotas = require('./App/Rotas/Router')
var consign = require('consign');
//Usando os presets
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
//comecando o socket
const io = socket(server, {
    cors: {
        origin: '*',
        Credentials: false
    }
})
//Eventos do socket
io.on('connection', function (socket) {
    console.log('conectado ',socket.id)
    socket.on('disconnect', function () {
        console.log('Got disconnect!');
    });
});
//Chamada das routas
app.use((req, res) => {
    const routers = new rotas(io)
    const defaultRouter = (req, res) => res.end('Olá, vamos começar')
    const chosen = routers[req.method.toUpperCase()] || defaultRouter
    return chosen.apply(routers, [req, res])
})
//Iniciando o servidor
server.listen(3000, () => {
    const { port } = server.address()
    console.log('servidor rodando na', port)
})