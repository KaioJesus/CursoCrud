const listaClientes = () =>  {
    return fetch(`http://localhost:3000/profile`)
    .then(resposta => {
        return resposta.json()
    })
}

const criaCliente = (nome, email) => { 
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST', 
        //method post -> de postar
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            //stringify para transformar em texto
            nome: nome,
            email: email
        })
    })
    .then( resposta => {
        return resposta.body
    })
}

const removeCliente = (id) => { 
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
        //metodo deletar
    })
}

const detalhaCliente  = (id) =>{
    return fetch(`http://localhost:3000/profile/${id}`)
    //pegando os dados de clientes específicos por conta do id
    .then(resposta => {
        return resposta.json()
    })
}

const atualizaCliente  = (id, nome, email) =>{
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        //metodo put para pôr o elemento e atualizar
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            //stringify para transformar em texto
            nome: nome,
            email: email
        })
    })
        .then(resposta => {
            return resposta.json()
        })
    
}

export const clienteService = { 
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}

//exportando objetos que são funções para outros arquivos, isso é bom porque ao invés de colocar export em todas as funções, você cria um objeto e adiciona as funções aqui para exportar.