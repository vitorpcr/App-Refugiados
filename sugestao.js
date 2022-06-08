const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
  const li = document.createElement('li');
  return li;
}

inputTarefa.addEventListener('keypress', function(e){
  if(e.keycode === 13){
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

function limparInput(){
  inputTarefa.value = '';
  //focus: deixar a barra de escrever ligada
  inputTarefa.focus();
}

function criaBotaoApagar(li){
  li.innerText += ' ';
  const botaoApagar = document.createElement('button');
  botaoApagar.innerText = 'apagar';
  botaoApagar.classList.add('apagar');
  botaoApagar.setAttribute('class', 'apagar');
  botaoApagar.setAttribute('tittle', 'apagar esta tarefa');
  //colocou o botao de apagar dentro da lista.
  li.appendChild(botaoApagar);
}
//a tarefa vai estar escrita em texto input, ent la embaixo ele criou um criarTarefa(inputTarefa.value), automatizando.
function criarTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  limparInput();
  criaBotaoApagar(li);
  salvarTarefas();

}


//addEventListener: evento de clicar(click)
btnTarefa.addEventListener('click', function () {
  if (!inputTarefa.value) return;
  criarTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e){
  const el = e.target;

  if(el.classList.contains('apagar')){
    el.parentElement.remove();
    salvarTarefas();
  }
});

function salvarTarefas(){
  const liTarefas = tarefas.querySelectorAll('li');
  const listaTarefas = [];

  for(let tarefa of liTarefas){
    let tarefaTexto = tarefa.innerText
    tarefaTexto = tarefaTexto.replace('apagar', '').trim();
    listaTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaTarefas);
  localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas(){
  const tarefas = localStorage.getItem('tarefas');
  const listaTarefas = JSON.parse(tarefas);
  
  for(let tarefa in listaTarefas){
    criaTarefa(tarefa);
  }
}

adicionaTarefasSalvas();
