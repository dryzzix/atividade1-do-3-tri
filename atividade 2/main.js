const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    const titulo = frm.inTitulo.value
    const duração = number(frm.inDuracao.value)

    const horas = matvh.floor(duracao / 60)
    const minutos = duracao % 60

    resp1.innerText = tituloresp2.innerText = `${horas} horas(s) e ${minutos} minutos(s)`

    e.preventDefault
})