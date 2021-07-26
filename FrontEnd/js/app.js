const membrosActivos = document.querySelectorAll('.members-active.d-flex h5');
const divMensagens = document.querySelector('#group-mensagem')
const form = document.querySelector('form')
const divMensagensEscritas=document.querySelector('#div-mensagens')
const UsuarioCorrenteID = 123
const mensagens = [
    {
        id: 1,
        emissor: 123,
        texto: 'Oi wy como estás?',
        destino: 123567,
        foto: 'f1.jpg'
    },
    {
        id: 3,
        emissor: 123567,
        texto: 'Bem e tu?',
        destino: 123,
        foto: 'f4.jpg'
    },
    {
        id: 4,
        emissor: 123,
        texto: 'Também estou bem, não mandas nada?',
        destino: 123567,
        foto: 'f1.jpg'
    },
    {
        id: 5,
        emissor: 123,
        texto: 'Fala então algo?',
        destino: 123567,
        foto: 'f1.jpg'
    },
    {
        id: 10,
        emissor: 123,
        texto: 'Fogo meu',
        destino: 123567,
        foto: 'f1.jpg'
    },
    {
        id: 11,
        emissor: 123567,
        texto: 'Estou fraco wy',
        destino: 123,
        foto: 'f4.jpg'
    },
    {
        id: 12,
        emissor: 123,
        texto: 'Tafx',
        destino: 123567,
        foto: 'f1.jpg'
    },
    {
        id: 13,
        emissor: 1235463,
        texto: 'Boa noite cota',
        destino: 12,
        foto: 'f5.jpg'
    },
    {
        id: 2,
        emissor: 1235463,
        texto: 'Boa noite Abel',
        destino: 123,
        foto: 'f5.jpg'
    }
]
membrosActivos.forEach(e => {
    e.addEventListener('click', (z) => {
        divMensagensEscritas.classList.remove('d-none')
        const membroSelecionado = z.target.getAttribute('codigo')
        form.idDestino.value = membroSelecionado
        //localStorage.setItem('membroSelecionado', membroSelecionado)
        buscarMensagem(membroSelecionado)
    })
})

function buscarMensagem(IDMembro) {
    divMensagens.innerHTML = ``;
    /* Pegar mensagem da base de dados */
    const msg = mensagens.filter((e) => {
        return e.emissor == UsuarioCorrenteID && e.destino == IDMembro
            || e.emissor == IDMembro && e.destino == UsuarioCorrenteID
    })
    /* renderizo as mensagens na tela */
    for (const indice in msg) {
        layoutMensagem(msg[indice])
    }
}
function layoutMensagem(mensagem) {
    var div;
    if (mensagem.emissor !== UsuarioCorrenteID) {
        div = `<div class="d-flex justify-content-start my-3 px-3">
                        <img src="./img/${mensagem.foto}" class="img-fluid rounded-circle" alt="" style="height: 50px; width: 50px;">
                     <div class="p-3 mx-2 context-mensagem-item bg-white rounded" style="width: 300px;">
                         <p class="text-muted lead" codigo=${mensagem.id}> ${mensagem.texto}</p>
                     </div> `;
    } else {
        div = `<div class="d-flex justify-content-end my-3 px-3">
                    <div class="p-3 mx-2 context-mensagem-item bg-white rounded"
                        style="width: 300px;">
                        <p class="text-muted lead" codigo=${mensagem.id}> ${mensagem.texto}</p>
                    </div>
                    <img src="./img/${mensagem.foto}" class="img-fluid rounded-circle" alt=""style="height: 50px; width: 50px;">
                </div>`
    }
    divMensagens.innerHTML += div;
}
form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (!form.idDestino.value) {
        console.log('Nenhum amigo selecionado')
        return;
    }
    const destino = form.idDestino.value;
    const texto = form.txtMensagem.value;
    //Função para gravar na bd
    const IDS = mensagens.map(e => e.id)
    const novoID = Math.max.apply(null, IDS) + 1;
    const foto = mensagens.find(e => e.emissor == UsuarioCorrenteID).foto
    var novaMensagem = {
        id: novoID,
        emissor: UsuarioCorrenteID,
        texto: texto,
        destino: destino,
        foto: foto

    }
    mensagens.push(novaMensagem)
    form.txtMensagem.value = '';
    //Actualizo as mensagens
    buscarMensagem(destino)
})