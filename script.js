
const visor = document.getElementById("visor")
const botoes = document.querySelectorAll(".teclado button")

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        if (botao.classList.contains("espaco")) {
            visor.value += " "
        } else if (botao.classList.contains("backspace")) {
            visor.value = visor.value.slice(0, -1)
        } else if (botao.classList.contains("limpar")) {
            visor.value = ""
        } else {
            visor.value += botao.textContent
        }
    })
})
