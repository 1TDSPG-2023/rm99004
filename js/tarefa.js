
//Criar a lista de Tarefas array
let listaTarefasArray = [];

const botaoAddtarefa = document.getElementById("btnAddTarefa");

botaoAddtarefa.addEventListener("click", (evento)=>{

    evento.preventDefault();

    const inputTarefa = document.getElementById("idTarefa");

    listaTarefasArray.push(inputTarefa.value);

    const listaTarefasUL = document.getElementById("lista-tarefas");

    let li = document.createElement("li");

    li.textContent = inputTarefa.value;

    listaTarefasUL.appendChild(li);
    
    let botaoExcluir = document.createElement("button");

    botaoExcluir.textContent = " x ";

    li.appendChild(botaoExcluir);

    botaoExcluir.addEventListener("click",(evt)=>{

        let conteudoDoLi = evt.target.parentNode.textContent.split(" ");
        console.log(conteudoDoLi);

        let index = listaTarefasArray.indexOf(conteudoDoLi[0]);

        listaTarefasArray.splice(index,1);

        evt.target.parentNode.remove();

        console.log(listaTarefasArray);

    })

    inputTarefa.value = "";
    console.log(listaTarefasArray);
});