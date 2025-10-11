// const botones = document.querySelectorAll(".jobApplybtn");

// botones.forEach((boton) => {
//     boton.addEventListener("click", () => {
//         boton.textContent = "¡Aplicado!";
//         boton.disabled = true;
//         boton.classList.add("is-applied");
//     });
// });

// Si quieres manejar el evento a nivel de contenedor padre
const contenedorEmpleos = document.querySelector(".jobs-listing");
contenedorEmpleos?.addEventListener("click", (event) => {
    console.log(event.target, event.target.classList);

    if (event.target.classList.contains("jobApplybtn")) {
        const boton = event.target; // El botón que fue clickeado
        boton.textContent = "¡Aplicado!";
        boton.disabled = true;
        boton.classList.add("is-applied");
    } else {
        //navegar a empleo.html
        window.location.href = `empleo.html`;
    }
});

const filter = document.querySelector("#filter");
filter?.addEventListener("input", (event) => {
    const filtro = event.target.value.toLowerCase();
    const empleos = document.querySelectorAll(".jobCard");
});
