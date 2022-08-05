const subtrair = document.querySelector('#subtrair');
const somar = document.querySelector('#somar');

const controle = document.querySelectorAll(".controle-ajuste")
console.log(controle)
controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
            manipulaDados(evento.target.textContext, evento.target.parentNode)
            
    })
} )

/*somar.addEventListener("click", () => {
manipulaDados("somar")})

subtrair.addEventListener("click", () => {manipulaDados("subtrair")})*/

function manipulaDados(operacao, controle){
    const peca = controle.querySelector(".controle-contador")

    if (operacao === "-"){
        peca.value = parseInt(braco.value) - 1
    } else {
        braco.value = parseInt(braco.value) + 1
    }
}
