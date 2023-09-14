
//atribui o valor da tag h1 para a variavel titulo

let titulo = document.querySelector("h1").textContent;

//mostra no console do navegador a variavel titulo

console.log(titulo);

//modifica o titulo para "trembolona kkkkkkk"

document.querySelector("h1").textContent = "trembolona kkkkkkk";

//««««««««««««««aqui vamos maxer na tabela de imc»»»»»»»»»»»»»»»»//

let paciente = document.querySelector("#primeiro-paciente");

console.log(paciente);
// armazena somente as colunas de peso e altura 
let tdPeso = paciente.querySelector(".info-peso");
let tdAltura = paciente.querySelector(".info-altura");

// armazena somente os valores de peso e altura //
let peso = tdPeso.textContent;
let altura = tdAltura.textContent;

//calcula o imc//


//altera imc na tabela//
let tdImc= paciente.querySelector(".info-imc");

    
//validação dos dados 

let pesoEhValido = true;
let alturaEhValida = true;

if ( altura < 0 || altura>3){

    console.log("imc invalido");
    tdImc.textContent = "imc imvalido";
    alturaEhValida = false;
}
if ( peso < 0 || peso>300){

    console.log("imc invalido");
    tdImc.textContent = "imc imvalido";
    pesoEhValido = false;
}

if (pesoEhValido === true && alturaEhValida === true ){

    let imc =  peso/ (altura*altura);
    tdImc.textContent = imc;
}
else{
    tdImc.textContent = "Peso e/ou altura invalidos!"
}