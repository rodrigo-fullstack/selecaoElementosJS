const element = document.querySelector(".element");

console.log("Exibindo por textContent: " + element.textContent);
console.log("Exibindo por innerHTML: " + element.innerHTML);

// Pode selecionar tomando como base outro elemento diferente do document
// const innerElement = element.querySelector('.element');
// console.log(innerElement.textContent);

// const innerElements = document.querySelectorAll('.element > .element') Não é uma forma legal de fazer seleção pois dificulta a seleção de todos os elementos

// console.log(`innerElements = ${innerElements}`) Exibe o tipo do elemento html (HTML Div Element)
// console.log(`InnerElements = ${innerElements.innerHTML}`)

// Seleciona somente os elementos internos
const outerElements = document.querySelectorAll(".element:has(.element)");

// console.log("Quantidade de Elementos: " + outerElements.length);

// Exibindo um innerHTML pelo índice


function exibirInnerHTML(array){
    array.forEach((element) =>{
        console.log("Elemento atual INNER HTML: " + element.innerHTML);
    })

}

function exibirPropriedade(array, prop){
    
    array.forEach((element) =>{
        console.log("Elemento atual " + prop + ": " + eval("element." + prop));
    })

}

exibirPropriedade(outerElements, "innerHTML");

function verificarCaracterMaisculoMinusculo(string){

}

// Qual é a diferença entre um minúsculo e um maiúsculo no computador?