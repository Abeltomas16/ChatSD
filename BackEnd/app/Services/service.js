const PessoasActivas = []
class membros {
    Adicionar(pessoa) {
        PessoasActivas.push(pessoa)
        return true;
    }
    Exluir(id) {
        const indice = PessoasActivas.findIndex(e => e.id == id)
        PessoasActivas.splice(indice, 1)
        return true;
    }
    Listar(id) {
        return PessoasActivas;
    }
}
module.exports=membros