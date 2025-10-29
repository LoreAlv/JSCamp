class DevJobsPaginacion extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    render() {
        //recoger atributos
        const numPaginas = this.getAttribute("numPags") ?? "1";
        const paginaActual = this.getAttribute("paginaActual") ?? "1";

        // Additional rendering logic can be added here if needed
        let interior = `
<style>
    .paginacion {
        display: grid;
        justify-content: center;
        gap: 1.75rem;
        grid-template-columns: repeat(7, 20px);
        margin-top: 1.5rem;
        padding: 1.5rem 0;
        border: 0;
    }

    .paginacion a {
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-primary);
        width: 40px;
        height: 40px;
        border-radius: 5px;
        cursor: pointer;
        transition: all;
        &:hover {
            background-color: var(--card-bg);
        }
        &.paginaActual {
            background-color: var(--primary-light);
            color: white;
            pointer-events: none;
        }
    }
        .is-disabled {
            pointer-events: none;
            opacity: 0.35;
        }
</style>
            <nav class="paginacion">`;
        interior += `
                    <a href="../empleos.html?pagina=${parseInt(paginaActual) - 1}" class='${
            paginaActual == 1 ? "is-disabled" : ""
        }'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M15 6l-6 6l6 6" />
                    </svg></a>
`;
        for (let i = 1; i <= numPaginas; i++) {
            interior += `                <a href="../empleos.html?pagina=${i}" class='${i == paginaActual ? "paginaActual" : ""}'>${i}</a>`;
        }
        interior += `
                <a href="../empleos.html?pagina=${parseInt(paginaActual) + 1}" class='${
            paginaActual == numPaginas ? "is-disabled" : ""
        }'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 6l6 6l-6 6" />
                    </svg></a>`;
        interior += `            </nav>`;
        this.shadowRoot.innerHTML = interior;
    }

    // Llamado cuando el elemento es añadido al DOM
    connectedCallback() {
        this.render();
    }
}

//registrar el custom element
customElements.define("devjobs-paginacion", DevJobsPaginacion);
