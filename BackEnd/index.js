//Importando os módulos
const express = require('express')
const socket = require('socket.io')
const app = express()
const server = require('http').Server(app)
var consign = require('consign');
var servicos = require('./app/Services/service')
var mensagemService = require('./app/Services/sms')

//Usando os presets
app.set('view engine', 'ejs')
app.set('views', './app/View')

app.use(express.static('./Public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
//Setando as verificações de seguranças
app.use(helmet.contentSecurityPolicy());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());
//#region socket
//comecando o socket
const io = socket(server, {
    cors: {
        origin: '*',
        Credentials: false
    }
})
//Instância so meu servico
const service = new servicos();
const servicemensagem = new mensagemService();
//Eventos do socket
io.on('connection', function (cliente) {
    //se entrou alguém
    console.log('alguém connectou ', cliente.id)
    //se recebi um evento de  novoMembro
    cliente.on('novoMembro', (membro) => {
        if (!membro.nomeUsuario)
            return
        const indice = service.Listar().findIndex(e => e.nomeUsuario == membro.nomeUsuario.toLowerCase())
        if (indice !== -1) {
            cliente.emit('usuarioExistente', 'Já existe um usuário com este nome no chat')
        } else {
            membro.nomeUsuario = membro.nomeUsuario.toLowerCase()
            service.Adicionar(membro)
            const usuarios = service.Listar()
            console.log('todos usuário', usuarios)
            io.emit('refreshUsuarios', usuarios)
        }
    })
    //confirmo se chegou nova mensagem no grupo
    cliente.on('newMessageGroup', (dado) => {
        cliente.broadcast.emit('messageGroup', dado);
    })
    //se alguém desconectou
    cliente.on('disconnect', function () {
        const indice = service.Listar().filter(e => e.id_socket == cliente.id).length
        if (indice > 0) {
            const usuarioSaiu = service.Listar()
                .find(e => e.id_socket == cliente.id)
            service.Exluir(cliente.id)
            servicemensagem.Exluir(cliente.id)
            const usuarios = service.Listar()
            io.emit('refreshUsuarios', usuarios)
            io.emit('saiuUmUser', usuarioSaiu)
            console.log('Got disconnect!', cliente.id);
        }
    });
});
//#endregion
//Chamada das routas
//Rota que mostra todas as mensagem por id
app.get('/getsms/:emissor/:receptor', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    const emissor = req.params.emissor;
    const receptor = req.params.receptor;
    const result = servicemensagem.Listar(emissor, receptor)
    res.json(result)
})
//rota que traz todas as mensagens
app.get('/getsms', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    const result = servicemensagem.get()
    res.json(result)
})
//rota que grava as mensagens
app.post('/send', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    const emissor = req.body.emissor
    const receptor = req.body.receptor
    const conteudo = req.body.mensagem
    const data = req.body.data
    const sms = {
        emissor,
        receptor,
        conteudo,
        data
    }
    servicemensagem.Adicionar(sms)
    const result = servicemensagem.get()
    io.to(receptor).emit('novaMensagem', sms)
    res.status(200).json(result)
})
//midleware principal
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.post('/login', (req, res) => {
    const dados = req.body
    const nome = dados.nome
    const senha = dados.senha;
    if (nome === "Abel" && senha === "temp.123") {
        res.status(200).end('Bem vindo senhor Toms')
    } else {
        res.redirect('/')
    }
})
app.get('/', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.render('main')
})
app.get('*', (req, res) => {
    res.redirect('/')
})
server.listen(3000, () => {
    const { port } = server.address()
    console.log('servidor rodando na', port)
})