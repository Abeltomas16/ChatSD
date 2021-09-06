class sms {
    #mensagens
    #id
    constructor() {
        this.#mensagens = []
        this.#id = 1
    }
    Adicionar(mensagens) {
        this.#id++
        const novamensagem = {
            id: this.#id,
            ...mensagens
        }
        this.#mensagens.push(novamensagem)
    }
    Exluir(id) {
        const indice = this.#mensagens.filter(e => !(e.emissor == id || e.receptor == id))
        //  this.#mensagens.splice(indice, 1)
        this.#mensagens = indice
    }
    Listar(emissor, receptor) {
        console.log('emissor:', emissor)
        const result = this.#mensagens
            .filter(e => (e.emissor == emissor && e.receptor == receptor
                || e.emissor == receptor && e.receptor == emissor))
        return result
    }
    get() {
        return this.#mensagens
    }
}
module.exports = sms