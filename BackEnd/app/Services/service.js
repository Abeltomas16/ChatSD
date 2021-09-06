class membros {
    #usuarios
    constructor() {
        this.#usuarios = []
    }
    Adicionar(pessoa) {
        this.#usuarios.push(pessoa)
    }
    Exluir(id) {
        const indice = this.#usuarios.findIndex(e => e.id_socket == id)
        this.#usuarios.splice(indice, 1)
    }
    Listar() {
        const lista = this.#usuarios.map(e => e)
        return lista;
    }
    get(req, res) {
        res.json(this.#usuarios)
    }
}
module.exports = membros