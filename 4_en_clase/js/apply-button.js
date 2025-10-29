// Manejar el click en los botones de aplicar
// Si quieres manejar el evento a nivel de contenedor padre
const contenedorEmpleos = document.querySelector(".jobs-listing");
contenedorEmpleos?.addEventListener("click", (event) => {
    if (event.target.classList.contains("jobApplybtn")) {
        const boton = event.target; // El botón que fue clickeado
        boton.textContent = "¡Aplicado!";
        boton.disabled = true;
        boton.classList.add("is-applied");
    } else {
        //navegar a detalles.html
        window.location.href = `detalles.html`;
    }
});
