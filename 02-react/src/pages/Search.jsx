import { useEffect } from "react";
import { JobListings } from "../components/JobListings.jsx";
import { Pagination } from "../components/Pagination.jsx";
import { SearchFormSection } from "../components/SearchFormSection.jsx";
import { RESULTS_PER_PAGE, useFilterJobs } from "../hooks/useFilterJobs.jsx";

export const SearchPage = () => {
    // const [currentPage, setCurrentPage] = useState(1);
    const { filteredJobs, jobsFilteredByFilters, pagedJobs, currentPage, handlePageChange, handleSearch, handleTextFilter } = useFilterJobs();
    useEffect(() => {
        document.title = `Resultados: ${jobsFilteredByFilters.length} - Pagina ${currentPage} - DevJobs`;
    }, [jobsFilteredByFilters, currentPage]);

    return (
        <div className="search-results">
            <main>
                <SearchFormSection onSearch={handleSearch} onTextFilter={handleTextFilter} />
                <section>
                    <JobListings jobs={pagedJobs} numJobs={filteredJobs.length} />
                    <p>
                        Mostrando {(currentPage - 1) * RESULTS_PER_PAGE + 1} - {Math.min(currentPage * RESULTS_PER_PAGE, filteredJobs.length)} de {filteredJobs.length} trabajos
                    </p>
                    <Pagination numPags={Math.ceil(filteredJobs.length / RESULTS_PER_PAGE)} paginaActual={currentPage} onPageChange={handlePageChange} />
                </section>
            </main>
        </div>
    );
};
