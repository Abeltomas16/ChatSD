//Importando os módulos
const express = require('express')
const socket = require('socket.io')
const app = express()
//const server = require('http').Server(app)
const rotas = require('./App/Rotas/Router')
var consign = require('consign');
var servicos = require('./app/Services/service')
//Usando os presets
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
//#region socket
//comecando o socket
/* const io = socket(server, {
    cors: {
        origin: '*',
        Credentials: false
    }
}) */

/* //Instância so meu servico
const service = new servicos();
//Eventos do socket
io.on('connection', function (cliente) {
    //se entrou alguém
    console.log('alguém connectou ', cliente.id)
    //se recebi um evento de  novoMembro
    cliente.on('novoMembro', (dados) => {
        service.Adicionar(dados)
        const usuarios = service.Listar()
        console.log(usuarios)
        io.emit('refreshUsuarios', usuarios)

    })
    //confirmo se entrou
    //console.log(service.Listar())
    //se alguém desconectou
    cliente.on('disconnect', function () {
        service.Exluir(cliente.id)
        const usuarios = service.Listar()
        console.log(usuarios)
        io.emit('refreshUsuarios', usuarios)
        console.log('Got disconnect!', cliente.id);
    });
}); */
//#endregion
//Chamada das routas
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.use('/', rotas)
//Iniciando o servidor
app.listen(3000, () => {
    console.log('servidor rodando na', 3000)
})
/* server.listen(3000, () => {
    const { port } = server.address()
    console.log('servidor rodando na', port)
}) */