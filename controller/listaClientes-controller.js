import { clienteService } from '../service/cliente-service.js'

const criaNovaLinha = (nome, email, id) =>  { 
  const linhaNovoCliente = document.createElement('tr')
  const conteudo = `
      <td class="td" data-td>${nome}</td>
                  <td>${email}</td>
                  <td>
                      <ul class="tabela__botoes-controle">
                          <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                          <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                      </ul>
                  </td> 
                  `

                  /* o id que identifica cada cliente, vai pro final da página para ser possível editar o usuário de deseja 
                     Para identificar a página vou fazer uma query string, ou seja, vou passar sinal de interrogação, id igual, passo chaves e coloco um id */
  linhaNovoCliente.innerHTML = conteudo
  linhaNovoCliente.dataset.id = id;
  // adiciona um data attribute no elemento que está guardado na variável
  console.log(linhaNovoCliente);
  return linhaNovoCliente
}


const tabela = document.querySelector('[data-tabela]')

tabela.addEventListener('click', async (evento) => {
    let ehBotaoDeDeleta = evento.target.className === 'botao-simples botao-simples--excluir'
    //pegando como alvo a classe do elemento
    if(ehBotaoDeDeleta){
        try{
            const linhaCliente = evento.target.closest('[data-id]')
            //elemento pai mais proximo da td -> a tr
            let id = linhaCliente.dataset.id
            await clienteService.removeCliente(id)
            linhaCliente.remove()
        } catch(erro){
            window.location.href = "../telas/erro.html"
        }
       
    }
})

const render = async () => {
    try{
        const listaCliente = await clienteService.listaClientes()
        listaCliente.forEach(element => {
        tabela.appendChild(criaNovaLinha(element.nome,element.email, element.id))
        })
    } catch(erro){
        window.location.href = "../telas/erro.html"
    }
}

render();