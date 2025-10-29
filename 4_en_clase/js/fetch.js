const NUMERO_EMPLEOS_A_MOSTRAR = 5;
//cargar los empleos desde data.json
const contenedorEmpleos = document.querySelector(".jobs-listing");
fetch("./data.json")
    .then((response) => response.json())
    .then((jobs) => {
        //obtener el numero de pagina desde la url
        const urlParams = new URLSearchParams(window.location.search);
        //lo parseamos a entero
        const pagina = parseInt(urlParams.get("pagina") ?? "1");

        jobs.slice((pagina - 1) * NUMERO_EMPLEOS_A_MOSTRAR, pagina * NUMERO_EMPLEOS_A_MOSTRAR).forEach((job) => {
            const jobCard = document.createElement("article");
            jobCard.classList.add("job-listing-card");
            jobCard.setAttribute("data-ubicacion", job.ubicacion.toLowerCase());
            jobCard.setAttribute("data-tecnologia", job.data.tecnologia.map((tech) => tech.toLowerCase()).join(", "));
            jobCard.setAttribute("data-contrato", job.data.contract.toLowerCase().replace(" ", "-"));
            jobCard.setAttribute("data-experiencia", job.data.experiencia.toLowerCase().replace(" ", "-"));

            jobCard.innerHTML = `
                    <h3 class="jobTible">${job.titulo}</h3>
                    <p class="jobCompany">${job.empresa} | ${job.ubicacion}</p>
                    <button class="jobApplybtn">Aplicar</button>
                    <p class="jobDescription">${job.descripcion}
                    </p>`;

            contenedorEmpleos.appendChild(jobCard);
        });

        // <article class="job-listing-card" data-ubicacion="remoto" data-tecnologia="javascript, react, nodejs"
        //             data-contrato="tiempo-completo" data-experiencia="senior">
        //             <h3 class="jobTible">Ingeniero de Software</h3>
        //             <p class="jobCompany">Tech Solutions Inc. | Remoto</p>
        //             <button class="jobApplybtn">Aplicar</button>
        //             <p class="jobDescription">Buscamos un ingeniero de software con experiencia en desarrollo web y
        //                 conocimientos en
        //                 JavaScript,
        //                 React y
        //                 Node.js. El
        //                 candidato ideal debe ser capaz de trabajar en equipo y tener buenas habilidades de comunicación.
        //             </p>
        //         </article>

        //vamos a crear la paginacion
        const paginacion = document.createElement("devjobs-paginacion");
        paginacion.setAttribute("numPags", Math.ceil(jobs.length / NUMERO_EMPLEOS_A_MOSTRAR).toString());
        paginacion.setAttribute("paginaActual", pagina);
        contenedorEmpleos.after(paginacion);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
