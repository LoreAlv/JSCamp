import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { JobList } from "../components/JobList.jsx";

function App() {
    return (
        <div className="search-results">
            <Header />
            <main>
                <section>
                    <h2 className="titulazo">Encuentra tu próximo trabajo</h2>
                    <p>Explora miles de oportunidades en el sector tecnológico</p>
                    <form role="search" id="empleos-search-form">
                        <div className="buscador">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                <path d="M21 21l-6 -6" />
                            </svg>
                            <input type="text" name="empleos-search-input" id="empleos-search-input" placeholder="Buscar empleos por título o empresa" />
                        </div>
                        <div className="botonera">
                            <select name="tecnologia" id="tecnologia-select" className="selectFiltro">
                                <option value="">Todas las tecnologías</option>
                                <option value="javascript">JavaScript</option>
                                <option value="python">Python</option>
                                <option value="java">Java</option>
                                <option value="csharp">C#</option>
                                <option value="php">PHP</option>
                                <option value="ruby">Ruby</option>
                                <option value="go">Go</option>
                                <option value="typescript">TypeScript</option>
                                <option value="swift">Swift</option>
                                <option value="kotlin">Kotlin</option>
                            </select>
                            <select name="ubicacion" id="ubicacion-select" className="selectFiltro">
                                <option value="">Todas las ubicaciones</option>
                                <option value="remoto">Remoto</option>
                                <option value="cdmx">Ciudad de México</option>
                                <option value="guadalajara">Guadalajara</option>
                                <option value="barcelona">Barcelona</option>
                                <option value="otra">Otra</option>
                            </select>
                            <select name="contrato" id="contrato-select" className="selectFiltro">
                                <option value="">Cualquier contratos</option>
                                <option value="tiempo-completo">Tiempo completo</option>
                                <option value="medio-tiempo">Medio tiempo</option>
                                <option value="temporal">Temporal</option>
                                <option value="practicas">Prácticas</option>
                                <option value="freelance">Freelance</option>
                            </select>
                            <select name="experiencia" id="experiencia-select" className="selectFiltro">
                                <option value="">Cualquier nivel de experiencia</option>
                                <option value="junior">Junior</option>
                                <option value="semi-senior">Semi Senior</option>
                                <option value="senior">Senior</option>
                                <option value="lead">Lead</option>
                            </select>
                        </div>
                    </form>
                </section>
                <section>
                    <header>
                        <h2>Resultados de búsqueda </h2>
                    </header>
                    {/* <!-- Se añadirán los resultados aquí dinámicamente. --> */}
                    <JobList />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
