
const header = document.querySelector('header')

function stickyNavBar(){
    header.classList.toggle('scrolled', window.pageYOffset > 0);
}

stickyNavBar()

window.addEventListener('scroll', stickyNavBar)


/*

var enviarBotao = document.querySelector('.submit')

function enviar(){
  if(enviarBotao){
      console.log("enviado com sucesso")
  }else{
      console.log("nao enviou")
  }
}

enviar()
*/

