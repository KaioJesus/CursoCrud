const listaClientes = () =>  {
    return fetch(`http://localhost:3000/profile`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error ('Não foi possível listar os clientes');
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
        if(resposta.ok){
            return resposta.body
        }
        throw new Error ('Não foi possível criar um cliente');
    })
}

const removeCliente = (id) => { 
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
        //metodo deletar
    }) . then (resposta => {
        if(!resposta.ok){
            throw new Error ('Não foi possível deletar um cliente');
        }
    })
}

const detalhaCliente  = (id) =>{
    return fetch(`http://localhost:3000/profile/${id}`)
    //pegando os dados de clientes específicos por conta do id
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error ('Não foi possível detalhar o cliente');
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
            if(resposta.ok){
                return resposta.json()
            }
            throw new Error ('Não foi possível atualizar o cliente');
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