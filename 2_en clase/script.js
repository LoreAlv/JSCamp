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

document.getElementById("ubicacion-select").addEventListener("change", function () {
    const ubicacion = this.value;
    document.querySelectorAll(".jobs-listing article").forEach((article) => {
        if (!ubicacion || article.dataset.ubicacion === ubicacion) {
            article.style.display = "";
        } else {
            article.style.display = "none";
        }
    });
});

//filtrar por contrato
document.getElementById("contrato-select").addEventListener("change", function () {
    const contrato = this.value;
    document.querySelectorAll(".jobs-listing article").forEach((article) => {
        if (!contrato || article.dataset.contrato === contrato) {
            article.style.display = "";
        } else {
            article.style.display = "none";
        }
    });
});

//filtrar por experiencia
document.getElementById("experiencia-select").addEventListener("change", function () {
    const experiencia = this.value;
    document.querySelectorAll(".jobs-listing article").forEach((article) => {
        if (!experiencia || article.dataset.experiencia === experiencia) {
            article.style.display = "";
        } else {
            article.style.display = "none";
        }
    });
});

//filtrar por tecnologia
document.getElementById("tecnologia-select").addEventListener("change", function () {
    const tecnologia = this.value;
    console.log(tecnologia);
    document.querySelectorAll(".jobs-listing article").forEach((article) => {
        if (!tecnologia || article.dataset.tecnologia.includes(tecnologia)) {
            article.style.display = "";
        } else {
            article.style.display = "none";
        }
    });
});
