const membros = [
    { id: 1, nome: 'Abel' },
    { id: 2, nome: 'Joao' },
    { id: 3, nome: 'Tomás' },
    { id: 4, nome: 'Gabriel' },
]
const mensagens = [
    { id: 1, conteudo: 'oi Abel', emissor: 2, receptor: 1 },
    { id: 2, conteudo: 'como estás?', emissor: 1, receptor: 2 },
    { id: 3, conteudo: 'Oi wy', emissor: 1, receptor: 3 },
    { id: 4, conteudo: 'Como estás fella?', emissor: 3, receptor: 4 }
]
exports.enviar = (req, res) => {
    const emissor = req.params.emissor
    const receptor = req.params.receptor
    const conteudo = 'Oi aqui'
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
    const emissor = req.params.emissor
    const receptor = req.params.receptor
    const result = mensagens
        .filter(e => (e.emissor == emissor && e.receptor == receptor
            || e.emissor == receptor && e.receptor == emissor))
    console.log(result)
    res.json(result)
}
exports.getmembers = (req, res) => {
    console.log('veio')
    res.json(membros)
}