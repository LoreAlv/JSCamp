class DevJobsAvatar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    createUrl(service, username, size) {
        return `https://unavatar.io/${service}/${username}?size=${size}` ?? "./foto.png";
    }

    render() {
        //recoger atributos
        const service = this.getAttribute("service") ?? "github";
        const username = this.getAttribute("username") ?? "midudev";
        const size = this.getAttribute("size") ?? "40";

        // Additional rendering logic can be added here if needed
        this.shadowRoot.innerHTML = `
<style>
a {
    margin: auto;
}

img {
    width: ${size}px;
    height: ${size}px;
    border-radius: 100%;
    object-fit: cover;
    border: 2px solid var(--primary);
    box-sizing: border-box;
}

img:hover {
    border: 4px solid var(--primary-hover);
}
</style>
    <a href="#" >
        <img 
        src="${this.createUrl(service, username, size)}" 
        alt="avatar de ${username} de ${service}" >
        </a>`;
    }

    // Llamado cuando el elemento es añadido al DOM
    connectedCallback() {
        this.render();
    }
}

//registrar el custom element
customElements.define("devjobs-avatar", DevJobsAvatar);
