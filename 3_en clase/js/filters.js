//filtrar por ubicacion
document.getElementById("ubicacion-select").addEventListener("change", function () {
    const selectedUbicacion = this.value;
    document.querySelectorAll(".jobs-listing article").forEach((article) => {
        const ubicacion = article.dataset.ubicacion;
        const isShown = selectedUbicacion === "" || ubicacion === selectedUbicacion;
        article.classList.toggle("is-hidden", !isShown);
    });
});

//filtrar por contrato
document.getElementById("contrato-select").addEventListener("change", function () {
    const contrato = this.value;
    document.querySelectorAll(".jobs-listing article").forEach((article) => {
        const contratoJob = article.dataset.contrato;
        const isShown = contrato === "" || contratoJob === contrato;
        article.classList.toggle("is-hidden", !isShown);
    });
});

//filtrar por experiencia
document.getElementById("experiencia-select").addEventListener("change", function () {
    const experiencia = this.value;
    document.querySelectorAll(".jobs-listing article").forEach((article) => {
        const experienciaJob = article.dataset.experiencia;
        const isShown = experiencia === "" || experienciaJob === experiencia;
        article.classList.toggle("is-hidden", !isShown);
    });
});

//filtrar por tecnologia
document.getElementById("tecnologia-select").addEventListener("change", function () {
    const tecnologia = this.value;
    document.querySelectorAll(".jobs-listing article").forEach((article) => {
        const tecnologiaJob = article.dataset.tecnologia;
        const isShown = tecnologia === "" || tecnologiaJob.includes(tecnologia);
        article.classList.toggle("is-hidden", !isShown);
    });
});

//manejar el submit del formulario
const searchForm = document.getElementById("empleos-search-form");
searchForm?.addEventListener("submit", function (event) {
    event.preventDefault();
    //filtrar los empleos por titulo de la oferta
    const filtro = filter.value.toLowerCase();
    document.querySelectorAll(".jobs-listing article").forEach((article) => {
        const titulo = article.querySelector(".jobTible").textContent.toLowerCase();
        const empresa = article.querySelector(".jobCompany").textContent.toLowerCase();
        const descripcion = article.querySelector(".jobDescription").textContent.toLowerCase();
        const isShown = filtro === "" || titulo.includes(filtro) || empresa.includes(filtro) || descripcion.includes(filtro);
        article.classList.toggle("is-hidden", !isShown);
    });
});

//filtrar por input text

const filter = document.querySelector("#empleos-search-input");
//manejar el blur del input para que haga el submit
filter?.addEventListener("blur", (event) => {
    //lo tratamos como un submit
    searchForm?.dispatchEvent(new Event("submit"));
});

//realizar el submit cuando haya al menos 3 caracteres y el usuario deje de escribir por 500ms
let timeout = null;
filter?.addEventListener("input", (event) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        if (filter.value.length >= 3 || filter.value.length === 0) {
            searchForm?.dispatchEvent(new Event("submit"));
        }
    }, 500);
});
