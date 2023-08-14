// console.log("Olá mundo!")

// //Declarar arrays
// let alunos = ["João","Carlos","Maria"];

// //Imprimindo um indice do array
// console.log(alunos[0])

// //Utilizando um forEach para imprimir o array
// alunos.forEach(aluno=>(
//     console.log(`O nome é ${aluno}`)
// ))

//Criando um array de array de alunos
//e suas notas
// let grupos = [ ["Laura","Leticia"], ["Pedro","Gustavo"] ]
// //Imprimindo o primeiro indice do array
// let alunos = grupos[0]
// console.log(grupos[0][0])
// console.log(alunos[0])

// //Declarar arrays de alunos
// let alunos = ["João","Carlos","Maria"];
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é : ${aluno}`)
// ))

// //Adicionando um novo aluno ao final do array com push();
// console.log("\n");
// alunos.push('Ana');
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é : ${aluno}`)
// ));

// console.log("\n");
// //Utilizando o método sort para organizar o array em ordem alfabética.
// alunos.sort()
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é : ${aluno}`)
// ));

// console.log("\n");
// //Utilizando o reverse para reverter a ordem que se apresenta
// alunos.reverse();
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é : ${aluno}`)
// ));

// console.log("\n");
// //Utilizando o pop() para remover o último elemento do array.
// alunos.pop();
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é : ${aluno}`)
// ));

// console.log("\n");
// //Adicionando elementos ao inicio do array com unshift()
// alunos.unshift("Jorge");
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é : ${aluno}`)
// ));

// console.log("\n");
// //Removendo elementos do inicio do array com shift()
// alunos.shift();
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é : ${aluno}`)
// ));


// console.log("\n");
// //Alterando elementos no meio do array com splice(posicao-inicial, posicao-final,novos-valores)
// alunos.splice(1,1,"Adrian");
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é : ${aluno}`)
// ));

// console.log("\n");
// //Removendo elementos no meio do array com splice(posicao-inicial, posicao-final,não passamos valores nesse caso)
// alunos.splice(1,1);
// alunos.forEach(aluno=>(
//     console.log(`O nome do aluno é : ${aluno}`)
// ));


//Este é um array de objetos de cursos onde ele vai popular uma lista ul com os cursos e suas durações.
//Vamos criar novos elementos com o createElement e adicionar ao html com o appendChild
//Precisamos saber quem é o pai do elemento que vamos adicionar, no caso é a ul. Porém não temos uma ul ainda. Mas temos o elemento pai que é a div com id cursos.
//Então vamos criar a ul e adicionar a div com id cursos.


const cursos = [
    {"nome" : "HTML-5", "duracao":"3 meses"},
    {"nome" : "CSS-3", "duracao":"4 meses"},
    {"nome" : "Javascript", "duracao":"5 meses"},
    {"nome" : "React", "duracao":"5 meses"}
] 

//Criando a ul
const ul = document.createElement("ul");

//Adicionando a ul a div com id box-cursos
const boxCursos = document.getElementById("box-cursos");

//Adicionando a ul a div com id box-cursos
boxCursos.appendChild(ul);

//Criando os elementos li e adicionando a ul
cursos.forEach(curso=>{
   
    //Criando o elemento li
    const li = document.createElement("li");
    //Criando o botão excluir
    const btnExcluir = document.createElement("button");
    //Adicionando o texto ao botão excluir
    btnExcluir.textContent = "x";
    //Adicionando a classe btnExcluir ao botao
    btnExcluir.setAttribute("class","btnExcluir");
    //Adicionando o id ao li
    li.id = `curso-${cursos.length}`;
    //Adicionando as propriedades concatenadas ao li
    li.textContent = `${curso.nome} - ${curso.duracao}`;
    //Adicionando o botão excluir ao li
    ul.appendChild(li);
    
     //Adicionando o botão excluir ao li - Deve ser adicionado após o li ser adicionado a ul.
     li.appendChild(btnExcluir);

        //Adicionando um evento ao botão excluir para remover da lista e do array o curso que foi clicado utilizando arrow function e event.target
        btnExcluir.addEventListener("click",(evt)=>{
            //Removendo o elemento do array
    
            cursos.forEach((curso,index)=>{
                if(curso.nome === evt.target.parentNode.textContent.split("-")[0]){
                    cursos.splice(index,1);
                    ul.removeChild(evt.target.parentNode);
                }
            });
    
            //Removendo o elemento do html
            ul.removeChild(evt.target.parentNode);
        });
});

//Código engessado porque foi utilizado o onclick no html
// function cadastrar(nomeCurso,duracaoCurso){
   
//     //Recebendo os valores que o usuário digitou
//     const novoCurso = {"nome":nomeCurso,"duracao":duracaoCurso};
//     //Adicionando o novo curso ao array de cursos
//     cursos.push(novoCurso);
//     //Adicionando o novo curso a lista de cursos
//     const li = document.createElement("li");
//     //Adicionando o id ao li
//     li.id = `curso-${cursos.length}`;
//     //Adicionando o texto ao li
//     li.textContent = `${nomeCurso} - ${duracaoCurso}`;
//     //Adicionando o li a ul
//     ul.appendChild(li);
// }

//Código dinâmico porque foi utilizado o addEventListener no js
 function cadastrar(){ 

    //Recebendo os valores que o usuário digitou
    const nomeCurso = document.getElementById("idNmCurso").value;
    const duracaoCurso = document.getElementById("idDuracaoCurso").value;
    const novoCurso = {"nome":nomeCurso,"duracao":duracaoCurso};

    //Adicionando o novo curso ao array de cursos
    cursos.push(novoCurso);

    //Adicionando o novo curso a lista de cursos
    const li = document.createElement("li");

    //Criando o botão excluir
    const btnExcluir = document.createElement("button");

    //Adicionando o texto ao botão excluir
    btnExcluir.textContent = "x";

    //Adicionando a classe btnExcluir ao botao
    btnExcluir.setAttribute("class","btnExcluir");

    //Adicionando o id ao li
    li.id = `curso-${cursos.length}`;

    //Adicionando o texto ao li
    li.textContent = `${nomeCurso} - ${duracaoCurso}`;

    //Adicionando o li a ul
    ul.appendChild(li);

     //Adicionando a classe ao li
     li.setAttribute("class","curso");

     //Adicionando o botão excluir ao li - Deve ser adicionado após o li ser adicionado a ul.
     li.appendChild(btnExcluir);

    //Adicionando um evento ao botão excluir para remover da lista e do array o curso que foi clicado utilizando arrow function e event.target
    btnExcluir.addEventListener("click",(evt)=>{
        //Removendo o elemento do array

        cursos.forEach((curso,index)=>{
            if(curso.nome === evt.target.parentNode.textContent.split("-")[0]){
                cursos.splice(index,1);
                ul.removeChild(evt.target.parentNode);
            }
        });

        //Removendo o elemento do html
        ul.removeChild(evt.target.parentNode);
    });



    
    
}



//Criando um evento para o botão btnAddCurso
const btnAddCurso = document.getElementById("btnAddCurso");
btnAddCurso.addEventListener("click",cadastrar);

