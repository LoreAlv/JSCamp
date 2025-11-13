import { useState } from "react";
import jobs from "../data.json";
import { useSearchParams } from "react-router";
export const RESULTS_PER_PAGE = 5;

export const useFilterJobs = () => {
    const [textFilter, setTextFilter] = useState("");
    const [filters, setFilters] = useState({});
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 1;

    const handlePageChange = (page) => {
        // setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
        setSearchParams({ page });
    };

    const handleSearch = (filter) => {
        setFilters(filter);
        // setCurrentPage(1); // Reiniciar a la primera página al cambiar los filtros de búsqueda
        window.scrollTo({ top: 0, behavior: "smooth" });
        setSearchParams({ page: 1 });
    };

    const handleTextFilter = (newText) => {
        setTextFilter(newText);
        // setCurrentPage(1); // Reiniciar a la primera página al cambiar el filtro de texto
        window.scrollTo({ top: 0, behavior: "smooth" });
        setSearchParams({ page: 1 });
    };

    const jobsFilteredByFilters = jobs.filter((job) => {
        const matchesTechnology = filters.technology ? job.tags?.includes(filters.technology.toLowerCase()) : true;
        const matchesLocation = filters.location ? job.location?.toLowerCase() === filters.location.toLowerCase() : true;
        const matchesContract = filters.contract ? job.contract?.toLowerCase() === filters.contract.toLowerCase() : true;
        const matchesExperience = filters.experience ? job.experience?.toLowerCase() === filters.experience.toLowerCase() : true;

        return matchesTechnology && matchesLocation && matchesContract && matchesExperience;
    });

    const filteredJobs =
        textFilter === ""
            ? jobsFilteredByFilters
            : jobsFilteredByFilters.filter((job) => {
                  const searchText = textFilter.toLowerCase();
                  return job.title.toLowerCase().includes(searchText) || job.company.toLowerCase().includes(searchText);
              });
    const pagedJobs = filteredJobs.slice((currentPage - 1) * RESULTS_PER_PAGE, currentPage * RESULTS_PER_PAGE);

    return { filteredJobs, jobsFilteredByFilters, pagedJobs, currentPage, handlePageChange, handleSearch, handleTextFilter };
};
