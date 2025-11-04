// import { jobs } from "../src/data.js";
import { JobCard } from "./JobCard.jsx";

export const JobListings = ({ jobs, numJobs }) => {
    return (
        <>
            <header>
                <h2>Resultados de búsqueda ({numJobs})</h2>
            </header>
            {/* <!-- Se añadirán los resultados aquí dinámicamente. --> */}
            <div className="jobs-listing">
                {jobs.map((job, index) => (
                    <JobCard key={index} job={job} />
                ))}
            </div>
        </>
    );
};
