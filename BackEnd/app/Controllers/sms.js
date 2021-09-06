const membros = [
]
const mensagens = [
]
exports.usuario = (req, res) => {
    const nome = req.params.nome
    const user = membros.find(e => e.nome == nome)
    res.json(user)
}
exports.salvaSocket = (req, res) => {
    console.log(req.body.id)
    const id = parseInt(req.body.id)
    const id_socket = req.body.id_socket
    const indice = membros.findIndex(e => e.id == id)
    const user = membros[indice]
    const novoUsuario = {
        ...user,
        id_socket
    }
    membros[indice] = novoUsuario
    res.json(membros)
}
exports.enviar = (req, res) => {
    const emissor = parseInt(req.body.emissor)
    const receptor = parseInt(req.body.receptor)
    const conteudo = req.body.mensagem
    id = 5
    mensagens.push({
        id,
        conteudo,
        emissor,
        receptor
    })
    res.json(mensagens)
}
exports.getsmsporid = (req, res) => {
    const emissor = req.params.emissor;
    const receptor = req.params.receptor;
    console.log(emissor)
    const result = mensagens
        .filter(e => (e.emissor == emissor && e.receptor == receptor
            || e.emissor == receptor && e.receptor == emissor))
    console.log(result)
    res.json(result)
}
exports.getmembers = (req, res) => {
    const membrosActivos = membros.filter(e => e.id_socket !== null)
    res.json(membrosActivos)
}