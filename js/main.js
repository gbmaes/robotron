const robotron = document.querySelector('#robotron');

robotron.addEventListener("click", (event) => {
    console.log(event)
})

function dizOi(nome) {
    console.log("Oi" + nome)
    console.log("Bem vindo ao robotron 2000")
}

dizOi("Gabriel")