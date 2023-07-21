import { clienteService } from '../service/cliente-service.js'

const formulario = document.querySelector('[data-form]')


formulario.addEventListener('submit', async (evento)=> { 
  evento.preventDefault()

  try{
    const nome = evento.target.querySelector('[data-nome]').value //nome é o alvo -> target
    const email = evento.target.querySelector('[data-email]').value //email é o alvo --> target
    await clienteService.criaCliente(nome, email)
    .then(()=> {
      window.location.href = '../telas/cadastro_concluido.html'
    })
  } catch (erro){
    window.location.href = "../telas/erro.html"
  }

})