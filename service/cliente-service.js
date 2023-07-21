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
            'Content-Type' : 'application/json'
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

export const clienteService = { 
    listaClientes,
    criaCliente,
    removeCliente
}

//exportando objetos que são funções para outros arquivos