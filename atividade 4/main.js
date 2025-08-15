const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
   const quilo = number(frm.inQuilo.value);
   const consumo = number(frm.inConsumo.value);

   const valor = (quilo/ 1000) * consumo;
   resp.innerText = `valor a pagar: R$ ${valor.toFixed(2)}`

   e.preventDefault()
});